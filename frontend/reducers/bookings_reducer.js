import { combineReducers } from "redux";
import tentativeBookingsReducer from "./tentative_bookings_reducer";
import confirmedBookingsReducer from "./confirmed_bookings_reducer";

const bookingsReducer = combineReducers({
    confirmedBookings: confirmedBookingsReducer,
    tentativeBooking: tentativeBookingsReducer
})

export default bookingsReducer;