import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState";

const signOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };

        case actionTypes.SIGN_OUT_FAILURE:
            return state;

        default:
            return state;
    }
};

export default signOutReducer;
