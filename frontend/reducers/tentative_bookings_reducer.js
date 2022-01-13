import { FILL_IN_BOOKING, FILL_IN_ONE_FIELD_BOOKING, CLEAR_TENTATIVE_BOOKING } from '../actions/booking_actions';

const tentativeBookingsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case FILL_IN_BOOKING:
            return action.booking;
        case FILL_IN_ONE_FIELD_BOOKING:
            nextState[action.cat]= action.value;
            return nextState;
        case CLEAR_TENTATIVE_BOOKING:
            return {};
        default:
            return oldState;
    }
}

export default tentativeBookingsReducer;