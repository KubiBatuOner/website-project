import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../reducers/firebase/firebase";

export const signUpAsync = createAsyncThunk(
    "auth/signUp",
    async ({ email, password }) => {
        const userCredential = await auth.firebaseCreateUser(email, password);

        const user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };

        return user;
    }
);

const signUpSlice = createSlice({
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
            // pending sign-up request
            .addCase(signUpAsync.pending, (state) => {
                state.isLoading = true;
            })

            // fulfilled sign-up request
            .addCase(signUpAsync.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })

            // rejected sign-up request
            .addCase(signUpAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default signUpSlice.reducer;
