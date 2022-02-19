import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const deleteFavorite = favorite => ({
    type: DELETE_FAVORITE,
    favorite
})

export const addFavorite = favorite => dispatch => (
    FavoriteApiUtil.addFavorite(favorite).then(favorite => dispatch(receiveFavorite(favorite)))
)

export const fetchFavorites = userId => dispatch => (
    FavoriteApiUtil.fetchFavorites(userId).then(favorites => dispatch(receiveFavorites(favorites)))
)

export const removeFavorite = id => dispatch => (
    FavoriteApiUtil.removeFavorite(id).then(favorite => dispatch(deleteFavorite(favorite)))
)