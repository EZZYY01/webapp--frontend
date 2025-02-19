import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL} / register`, userData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL} / login`, userData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};