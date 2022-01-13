import { connect } from 'react-redux';
import Confirmation from './confirmation';
import { clearTentativeBooking } from '../../actions/booking_actions';

const mSTP = state => {
//    debugger
    return {
    currentUser: state.entities.users[state.session.id],
    booking: state.entities.bookings.confirmedBookings,
    restaurant: state.entities.rests[state.entities.bookings.confirmedBookings.rest_id]
}};

const mDTP = dispatch => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    clearTentativeBooking: () => dispatch(clearTentativeBooking())
});

export default connect(mSTP, mDTP)(Confirmation);