import axios from 'axios';
import { motion } from 'framer-motion';
import { Hash, Package } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddInstrument = () => {
    const [instrumentName, setInstrumentName] = useState('');
    const [instrumentCategory, setInstrumentCategory] = useState('');
    const [instrumentPrice, setInstrumentPrice] = useState('');
    const [instrumentDescription, setInstrumentDescription] = useState('');
    const [instrumentQuantity, setInstrumentQuantity] = useState('');
    const [instrumentImage, setInstrumentImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:5500/api/csrf-token",
                    {
                        withCredentials: true,
                    }
                );
                setCsrfToken(response.data.csrfToken);
            } catch (error) {
                console.error("Error fetching CSRF token:", error);
            }
        };

        fetchCsrfToken();
    }, []);

    const handleImage = (event) => {
        const file = event.target.files[0];
        setInstrumentImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('instrumentName', instrumentName);
        formData.append('instrumentPrice', instrumentPrice);
        formData.append('instrumentCategory', instrumentCategory);
        formData.append('instrumentDescription', instrumentDescription);
        formData.append('instrumentQuantity', instrumentQuantity);
        formData.append('instrumentImage', instrumentImage);

        try {
            const response = await axios.post(
                "https://localhost:5500/api/instrument/create",
                formData,
                {
                    headers: {
                        "X-CSRF-Token": csrfToken,
                    },
                    withCredentials: true,
                }
            );

            if (response.status === 201) {
                toast.success(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message);
                } else if (error.response.status === 500) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Something went wrong");
                }
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-2xl"
        >
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Add New Instrument</h1>
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-1">
                        <label className="flex items-center text-lg font-medium text-gray-700 mb-3" htmlFor="instrumentName">
                            <Package className="mr-2" size={24} />
                            Instrument Name
                        </label>
                        <input
                            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            id="instrumentName"
                            type="text"
                            placeholder="Enter instrument name"
                            value={instrumentName}
                            onChange={(e) => setInstrumentName(e.target.value)}
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-1">
                        <label className="flex items-center text-lg font-medium text-gray-700 mb-3" htmlFor="instrumentCategory">
                            <Hash className="mr-2" size={24} />
                            Instrument Category
                        </label>
                        <select
                            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            id="instrumentCategory"
                            value={instrumentCategory}
                            onChange={(e) => setInstrumentCategory(e.target.value)}
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="String">String</option>
                            <option value="Percussion">Percussion</option>
                        </select>
                    </motion.div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                    type="submit"
                >
                    Add Instrument
                </motion.button>
            </form>
        </motion.div>
    );
};

export default AddInstrument;
