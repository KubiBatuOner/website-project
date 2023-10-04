import * as actionTypes from "../actionTypes";
import { auth } from "../../reducers/firebase/firebase";

// Sign-out action
export function signOut() {
    return async (dispatch) => {
        try {
            // Firebase sign-out process
            await auth().signOut();

            // Dispatch action when sign-out is successful
            dispatch(signOutSuccess());
        } catch (error) {
            // Dispatch action when sign-out fails
            dispatch(signOutFailure(error));
        }
    };
}

// signOut success action
function signOutSuccess() {
    return {
        type: actionTypes.SIGN_OUT_SUCCESS,
        payload: {
            isAuthenticated: false,
            user: null,
        }
    };
}

// signOut failure action
function signOutFailure(error) {
    return {
        type: actionTypes.SIGN_OUT_FAILURE,
        error: error.message,
    };
}
