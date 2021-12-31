import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
    id: null
};

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            nextState["id"] = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState["id"] = null;
            return nextState;
        default:
            return oldState;
    }
}

export default sessionReducer;