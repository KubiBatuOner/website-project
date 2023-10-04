import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
            };

        case actionTypes.SIGN_IN_FAILURE:
            return state;

        default:
            return state;
    }
};

export default signInReducer;
