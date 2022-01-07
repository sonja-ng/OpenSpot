import { CHANGE_FILTER } from "../actions/search_actions";

const DEFAULT = {
    general: null,
    cuisine: null,
    neighborhood: null,
    name: null
}

const filtersReducer = (oldState = DEFAULT, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case CHANGE_FILTER:
            const newState = Object.assign({}, {[action.filter]:action.value});
            return newState;
        default:
            return oldState;
    }
}

export default filtersReducer;