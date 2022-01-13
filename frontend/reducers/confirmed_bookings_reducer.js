import { RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_BOOKINGS, CLEAR_BOOKINGS } from '../actions/booking_actions';

const confirmedBookingsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            const { booking } = action;
            return Object.assign({}, nextState, { [booking.id]: booking });
        case REMOVE_BOOKING:
            delete nextState[action.bookingId];
            return nextState;
        case CLEAR_BOOKINGS:
            return {};
        default:
            return oldState;
    }
}

export default confirmedBookingsReducer;