import { RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING,
    REMOVE_BOOKING_ERRORS} from "../actions/booking_actions";

const bookingErrorsReducer = (oldState = [], action) => {
    // debugger
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_BOOKING_ERRORS:
            return action.errors;
        case RECEIVE_BOOKING:
            return [];
        case REMOVE_BOOKING_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default bookingErrorsReducer;