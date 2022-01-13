import { connect } from 'react-redux';
import UserBookingIndex from './user_booking_index';
import { fetchBookings, updateBooking, deleteBooking, clearBookings} from '../../actions/booking_actions';

const mSTP = state => ({
    bookings: Object.values(state.entities.bookings.confirmedBookings),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchBookings: data => dispatch(fetchBookings(data)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    clearBookings: () => dispatch(clearBookings())
});

export default connect(mSTP, mDTP)(UserBookingIndex);