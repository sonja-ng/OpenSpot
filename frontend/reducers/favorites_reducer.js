import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, DELETE_FAVORITE } from '../actions/favorite_actions';

const favoriteReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_FAVORITE:
            const { favorite } = action;
            return Object.assign({}, nextState, { [favorite.id]: favorite });
        case RECEIVE_FAVORITES:
            return Object.assign({}, nextState, action.favorites);
        case DELETE_FAVORITE:
            delete nextState[action.favorite.id];
            return nextState;
        default:
            return oldState;
    }
}

export default favoriteReducer;