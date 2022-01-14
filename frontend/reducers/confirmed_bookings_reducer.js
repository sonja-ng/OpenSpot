import { RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKINGS, CLEAR_BOOKINGS } from '../actions/booking_actions';

const confirmedBookingsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            return action.booking;
        case REMOVE_BOOKING:
            delete nextState[action.booking.id];
            return nextState;
        case CLEAR_BOOKINGS:
            return {};
        default:
            return oldState;
    }
}

export default confirmedBookingsReducer;