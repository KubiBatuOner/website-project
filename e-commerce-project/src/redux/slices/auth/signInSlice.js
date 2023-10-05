import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../reducers/firebase/firebase";

export const signInAsync = createAsyncThunk(
    "auth/signIn",
    async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };

        return user;
    }
);

const signInSlice = createSlice({
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
            // pending sign-in request
            .addCase(signInAsync.pending, (state) => {
                state.isLoading = true;
            })

            // fulfilled sign-in request
            .addCase(signInAsync.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })

            // rejected sign-in request
            .addCase(signInAsync.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.error.message;
            });
    },
});

export default signInSlice.reducer;
