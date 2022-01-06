import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
// import restErrorsReducer from "./rest_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    users: userErrorsReducer,
    // rests: restErrorsReducer
});

export default errorsReducer;