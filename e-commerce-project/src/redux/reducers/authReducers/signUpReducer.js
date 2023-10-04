import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.SIGN_UP_FAILURE:
            return state;

        default:
            return state;
    }
};

export default signUpReducer;
