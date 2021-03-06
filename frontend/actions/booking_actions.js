import * as BookingApiUtils from '../util/booking_api_utils';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_BOOKING_ERRORS = 'REMOVE_BOOKING_ERRORS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const FILL_IN_BOOKING = 'FILL_IN_BOOKING';
export const FILL_IN_ONE_FIELD_BOOKING = 'FILL_IN_ONE_FIELD_BOOKING';
export const CLEAR_BOOKINGS = 'CLEAR_BOOKINGS';
export const CLEAR_TENTATIVE_BOOKING = 'CLEAR_TENTATIVE_BOOKING';


export const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

export const removeBooking = booking => ({
    type: REMOVE_BOOKING,
    booking
});

export const clearBookings = () => ({
    type: CLEAR_BOOKINGS,
});

export const fillInBooking = booking => ({
    type: FILL_IN_BOOKING,
    booking
});

export const fillInOneFieldBooking = (cat, value) => ({
    type: FILL_IN_ONE_FIELD_BOOKING,
    cat, 
    value
})

export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const removeBookingErrors = () => ({
    type: REMOVE_BOOKING_ERRORS
})

export const clearTentativeBooking = () => ({
    type: CLEAR_TENTATIVE_BOOKING
})

export const fetchBookings = data => dispatch => (
    BookingApiUtils.fetchBookings(data).then(bookings => dispatch(receiveBookings(bookings)))
);

export const fetchBooking = id => dispatch => (
    BookingApiUtils.fetchBooking(id).then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
    BookingApiUtils.createBooking(booking).then(booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const updateBooking = booking => dispatch => (
    BookingApiUtils.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const deleteBooking = bookingId => dispatch => (
    BookingApiUtils.deleteBooking(bookingId).then(booking => dispatch(removeBooking(booking)))
);