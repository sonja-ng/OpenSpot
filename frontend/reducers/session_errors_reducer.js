import { RECEIVE_ERRORS } from "../actions/session_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    const nextState = oldState.slice();
    switch(action.type){
        case RECEIVE_ERRORS:
            nextState.push(action.errors);
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState = [];
            return nextState;
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;