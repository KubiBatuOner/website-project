import * as actionTypes from "../actionTypes";
import auth from "../../reducers/firebase/firebase";

// SignUp action
export function signUp(email, password) {
    return async (dispatch) => {
        try {
            // Firebase authentication process
            const userCredential = await auth()
                .createUserWithEmailAndPassword(email, password);

            // Dispatch action when sign-up is successful
            dispatch(signUpSuccess(userCredential.user));
        } catch (error) {
            // Dispatch action when sign-up fails
            dispatch(signUpFailure(error));
        }
    };
}

// signUp success action
function signUpSuccess(user) {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        payload: user,
    };
}

// signUp failure action
function signUpFailure(error) {
    return {
        type: actionTypes.SIGN_UP_FAILURE,
        error: error.message,
    };
}
