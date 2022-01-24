import { connect } from 'react-redux';
import ModifyBooking from './modify_booking';
import { updateBooking, fillInBooking } from '../../actions/booking_actions';
import { fillInOneFieldBooking, clearBookings, fetchBooking } from '../../actions/booking_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    booking: state.entities.bookings.confirmedBookings[ownProps.match.params.bookingId],
    restaurants: state.entities.rests,
    tentativeBooking: state.entities.bookings.tentativeBooking
});

const mDTP = dispatch => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value)),
    clearBookings: () => dispatch(clearBookings()),
    fetchBooking: id => dispatch(fetchBooking(id)),
    
});

export default connect(mSTP, mDTP)(ModifyBooking);