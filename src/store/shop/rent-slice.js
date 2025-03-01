import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create Rent Async Thunk
export const createRent = createAsyncThunk(
    "shop/rent/createRent",
    async (rentData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5002/api/rent", rentData);
            return response.data;  // On success, return the data from the API
        } catch (error) {
            return rejectWithValue(error.response.data);  // Handle any error response
        }
    }
);

// Rent Slice
const rentSlice = createSlice({
    name: "rent",
    initialState: {
        rents: [],
        rentStatus: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createRent.pending, (state) => {
                state.loading = true;
            })
            .addCase(createRent.fulfilled, (state, action) => {
                state.loading = false;
                state.rents.push(action.payload);  // Store the rent details in the state
            })
            .addCase(createRent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message in the state
            });
    },
});

export default rentSlice.reducer;
