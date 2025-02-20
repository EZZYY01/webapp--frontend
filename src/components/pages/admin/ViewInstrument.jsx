import { Edit, MessageSquare, Star, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { deleteInstrument, getAllInstrumentsApi, getAverageRatingApi, getReviewsApi } from '../../apis/Api';

const ViewInstrument = () => {
    const [instruments, setInstruments] = useState([]);
    const [editInstrumentId, setEditInstrumentId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [deleteInstrumentId, setDeleteInstrumentId] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
    const [selectedInstrumentReviews, setSelectedInstrumentReviews] = useState([]);
    const [instrumentsRatings, setInstrumentsRatings] = useState({});

    useEffect(() => {
        fetchInstruments();
    }, []);

    const fetchInstruments = () => {
        getAllInstrumentsApi()
            .then((res) => {
                if (res.data.success && res.data.instruments) {
                    setInstruments(res.data.instruments);
                } else {
                    console.error('Error Fetching Instruments');
                }
            })
            .catch((error) => {
                console.error('Error Fetching Instruments:', error);
            });
    };

    useEffect(() => {
        for (let i = 0; i < instruments.length; i++) {
            getAverageRatingApi(instruments[i]._id)
                .then((res) => {
                    if (res.status === 200) {
                        const ratings = res.data.averageRating;
                        const id = res.data.instrumentId;

                        setInstrumentsRatings((prev) => {
                            return { ...prev, [id]: ratings };
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [instruments]);

    const handleEdit = (instrumentId) => {
        setEditInstrumentId(instrumentId);
        setIsEditModalOpen(true);
    };

    const handleDelete = (id) => {
        setDeleteInstrumentId(id);
        setIsDeleteDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        deleteInstrument(deleteInstrumentId)
            .then((res) => {
                if (res.status) {
                    toast.success(res.data.message);
                    fetchInstruments();
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 400) {
                        toast.error(error.response.data.message);
                    } else if (error.response.status === 500) {
                        toast.warning(error.response.data.message);
                    } else {
                        toast.error('Something went wrong');
                    }
                }
            })
            .finally(() => {
                setIsDeleteDialogOpen(false);
            });
    };

    const handleCloseDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleShowReviews = (instrumentId) => {
        getReviewsApi(instrumentId)
            .then((res) => {
                if (res.status === 200) {
                    setSelectedInstrumentReviews(res.data.reviews);
                }
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
                toast.error('Failed to load reviews');
            });
        setIsReviewDialogOpen(true);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">View Instruments</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Instrument Image</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Instrument Name</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Average Rating</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instruments.map((instrument) => (
                            <tr key={instrument._id}>
                                <td className="px-4 py-2 border-b">
                                    <img
                                        src={`https://localhost:5500/instruments/${instrument.instrumentImage}`}
                                        alt={instrument.instrumentName}
                                        className="h-20 w-20 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 border-b">{instrument.instrumentName}</td>
                                <td className="px-4 py-2 border-b">{instrument.instrumentCategory}</td>
                                <td className="px-4 py-2 border-b">{instrument.instrumentQuantity}</td>
                                <td className="px-4 py-2 border-b">{instrument.instrumentDescription}</td>
                                <td className="px-4 py-2 border-b">${instrument.instrumentPrice}</td>
                                <td className="px-4 py-2 border-b">
                                    {instrumentsRatings[instrument._id] ? instrumentsRatings[instrument._id].toFixed(1) : 'N/A'}
                                    <Star className="inline-block ml-1 text-yellow-400" size={16} fill="currentColor" />
                                </td>
                                <td className="px-4 py-2 border-b">
                                    <button onClick={() => handleEdit(instrument._id)} className="text-blue-500 hover:text-blue-700 mr-2">
                                        <Edit className="inline-block" size={16} />
                                    </button>
                                    <button onClick={() => handleDelete(instrument._id)} className="text-red-500 hover:text-red-700 mr-2">
                                        <Trash2 className="inline-block" size={16} />
                                    </button>
                                    <button onClick={() => handleShowReviews(instrument._id)} className="text-green-500 hover:text-green-700">
                                        <MessageSquare className="inline-block" size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewInstrument;
