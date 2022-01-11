import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    users: userErrorsReducer,
    reviews: reviewErrorsReducer
});

export default errorsReducer;