import { changeFilter, CHANGE_FILTER } from "../actions/search_actions";

const DEFAULT = {
    cuisine: null
}

const filtersReducer = (oldState = DEFAULT, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case CHANGE_FILTER:
            const newState = Object.assign({}, nextState, {[action.filter]:action.value});
            return newState;
        default:
            return oldState;
    }
}

export default filtersReducer;