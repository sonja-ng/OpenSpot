// import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER_INFO } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER_INFO:
            return Object.assign({}, oldState, {[action.user.id]: action.user});
        default:
            return oldState;
    }
}

export default usersReducer;