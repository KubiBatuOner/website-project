import { combineReducers } from "redux";
import signInReducer from "./authReducers/signInReducer";
import signUpReducer from "./authReducers/signUpReducer";
import signOutReducer from "./authReducers/signOutReducer";

const rootReducer = combineReducers({
  // Reducers

  // Auth Reducers
  signInReducer,
  signUpReducer,
  signOutReducer,
});

export default rootReducer;
