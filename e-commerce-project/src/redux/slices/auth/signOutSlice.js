import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../reducers/firebase/firebase";

export const signOutAsync = createAsyncThunk("auth/signOut", async () => {
    await auth.signOut();

    return null;
});

const signOutSlice = createSlice({
    name: "auth",

    initialState: {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            // pending sign-out request
            .addCase(signOutAsync.pending, (state) => {
                state.isLoading = true;
            })

            // fulfilled sign-out request
            .addCase(signOutAsync.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.isLoading = false;
                state.error = null;
            })

            // rejected sign-out request
            .addCase(signOutAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default signOutSlice.reducer;
