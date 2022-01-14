import { RECEIVE_REST, RECEIVE_RESTS } from "../actions/rest_actions";

const restsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_RESTS:
            return action.rests;
        case RECEIVE_REST:
            const newRest = {[action.rest.id]: action.rest};
            return Object.assign({}, oldState, newRest);
        default:
            return oldState;
    }
}

export default restsReducer;