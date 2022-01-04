import { RECEIVE_REST, RECEIVE_RESTS } from "../actions/rest_actions";

const restsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_RESTS:
            return action.rests;
        case RECEIVE_REST:
            nextState[action.rest.id] = action.rest;
        default:
            return oldState;
    }
}

export default restsReducer;