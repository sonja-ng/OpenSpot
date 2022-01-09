import { RECEIVE_REST_ERRORS } from "../actions/rest_actions";
import { RECEIVE_REST } from "../actions/rest_actions";

const restErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_REST_ERRORS:
            return action.errors
        case RECEIVE_REST:
            return [];
        // case REMOVE_USER_ERRORS:
        //     return [];
        default:
            return oldState;
    }
}

export default restErrorsReducer;