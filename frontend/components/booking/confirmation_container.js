import { connect } from 'react-redux';
import Confirmation from './confirmation';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    booking: state.entities.bookings.confirmedBookings
});

const mDTP = dispatch => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mDTP)(Confirmation);