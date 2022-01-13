import { connect } from 'react-redux';
import ModifyRsvp from './modify_rsvp';
import { updateBooking, fillInBooking } from '../../actions/booking_actions';
import { fillInOneFieldBooking } from '../../actions/booking_actions';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    booking: state.entities.bookings.confirmedBookings,
    tentativeBooking: state.entities.bookings.tentativeBooking
});

const mDTP = dispatch => ({
    updateBooking: booking => dispatch(updateBooking(booking)),
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value))
});

export default connect(mSTP, mDTP)(ModifyRsvp);