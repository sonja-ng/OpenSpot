import { connect } from 'react-redux';
import UserRsvpIndex from './user_rsvp_index';
import { fetchBookings, createBooking, updateBooking, deleteBooking, clearBookings} from '../../actions/booking_actions';

const mSTP = state => ({
    rsvps: Object.values(state.entities.bookings.confirmedBookings),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchBookings: data => dispatch(fetchBookings(data)),
    createBooking: booking => dispatch(createBooking(booking)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    clearBookings: () => dispatch(clearBookings())
});

export default connect(mSTP, mDTP)(UserRsvpIndex);