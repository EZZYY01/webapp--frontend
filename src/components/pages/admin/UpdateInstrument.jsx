import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';
import { getSingleInstrumentApi, updateInstrument } from '../../apis/Api';

Modal.setAppElement('#root');

const UpdateInstrument = ({ isOpen, onRequestClose, instrumentId, onUpdate }) => {
    const [instrumentName, setInstrumentName] = useState('');
    const [instrumentPrice, setInstrumentPrice] = useState('');
    const [instrumentCategory, setInstrumentCategory] = useState('');
    const [instrumentQuantity, setInstrumentQuantity] = useState('');
    const [instrumentDescription, setInstrumentDescription] = useState('');
    const [instrumentNewImage, setInstrumentNewImage] = useState(null);
    const [previewNewImage, setPreviewNewImage] = useState(null);
    const [oldImage, setOldImage] = useState('');

    useEffect(() => {
        if (instrumentId) {
            getSingleInstrumentApi(instrumentId)
                .then((res) => {
                    setInstrumentName(res.data.instrument.instrumentName);
                    setInstrumentPrice(res.data.instrument.instrumentPrice);
                    setInstrumentCategory(res.data.instrument.instrumentCategory);
                    setInstrumentQuantity(res.data.instrument.instrumentQuantity);
                    setInstrumentDescription(res.data.instrument.instrumentDescription);
                    setOldImage(res.data.instrument.instrumentImage);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [instrumentId]);

    const handleImage = (event) => {
        const file = event.target.files[0];
        setInstrumentNewImage(file);
        setPreviewNewImage(URL.createObjectURL(file));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('instrumentName', instrumentName);
        formData.append('instrumentPrice', instrumentPrice);
        formData.append('instrumentCategory', instrumentCategory);
        formData.append('instrumentQuantity', instrumentQuantity);
        formData.append('instrumentDescription', instrumentDescription);
        if (instrumentNewImage) {
            formData.append('instrumentImage', instrumentNewImage);
        }
        updateInstrument(instrumentId, formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    onUpdate();
                    onRequestClose();
                }
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message);
                }
            });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Instrument"
            className="max-w-2xl mx-auto my-16 p-6 bg-white rounded shadow-lg overflow-auto max-h-[80vh]"
            overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50"
        >
            <h2 className="text-2xl font-bold mb-4">Edit Instrument</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Instrument Name</label>
                        <input
                            type="text"
                            value={instrumentName}
                            onChange={(e) => setInstrumentName(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <select
                            value={instrumentCategory}
                            onChange={(e) => setInstrumentCategory(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        >
                            <option value="Standard Instrument">Standard</option>
                            <option value="Special Instrument">Special</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="number"
                        value={instrumentPrice}
                        onChange={(e) => setInstrumentPrice(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        value={instrumentDescription}
                        onChange={(e) => setInstrumentDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                    <input
                        type="number"
                        value={instrumentQuantity}
                        onChange={(e) => setInstrumentQuantity(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Current Image</label>
                    <div className="flex justify-center items-center mb-2">
                        {oldImage ? (
                            <img
                                src={`https://localhost:5500/instruments/${oldImage}`}
                                alt="Current Instrument"
                                className="h-40 w-40 object-cover rounded"
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">New Image</label>
                    <input
                        type="file"
                        onChange={handleImage}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {previewNewImage && (
                        <div className="flex justify-center items-center mt-2">
                            <img
                                src={previewNewImage}
                                alt="New Instrument"
                                className="h-40 w-40 object-cover rounded"
                            />
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onRequestClose}
                        className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                    >
                        Update Instrument
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateInstrument;
