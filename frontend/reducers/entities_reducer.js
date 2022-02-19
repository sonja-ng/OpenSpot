import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restsReducer from "./rests_reducer";
import reviewsReducer from "./reviews_reducer";
import bookingsReducer from "./bookings_reducer";
import searchReducer from "./search_reducer";
import favoriteReducer from "./favorites_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    rests: restsReducer,
    reviews: reviewsReducer,
    bookings: bookingsReducer,
    search: searchReducer,
    favorites: favoriteReducer
});

export default entitiesReducer;