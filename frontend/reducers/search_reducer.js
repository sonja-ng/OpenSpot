import { RECEIVE_RESTS } from "../actions/rest_actions";

const searchReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    const nextState = oldState.slice();
    switch(action.type) {
        case RECEIVE_RESTS:
            const rests = Object.values(action.rests);
            rests.forEach(rest => nextState.push(rest.cuisine, rest.neighborhood, rest.name))
            return nextState;
        default:
            return oldState;
    }
}

export default searchReducer;