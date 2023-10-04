import * as actionTypes from "../actionTypes";
import { auth } from "../../reducers/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import initialState from "../../reducers/initialState";

// Sign-in action
export function signIn(email, password, navigate) {
    return async (dispatch) => {
        try {
            // Firebase authentication process
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
            };

            console.log(initialState);

            // Dispatch action when login is successful
            dispatch(signInSuccess(user));

            console.log(initialState);

        } catch (error) {
            console.error("Sign-in error:", error);
            // Dispatch action when login is unsuccessful
            dispatch(signInFailure(error));
        }
    };
}

// signIn success action
function signInSuccess(user) {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: {
            isAuthenticated: true,
            user: user,
        },
    };
}

// signIn failure action
function signInFailure(error) {
    return {
        type: actionTypes.SIGN_IN_FAILURE,
        error: error.message,
    };
}
