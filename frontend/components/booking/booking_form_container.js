import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    restaurant: state.entities.rests[state.entities.bookings.tentativeBooking.rest_id],
    booking: state.entities.bookings.tentativeBooking
});

const mDTP = dispatch => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
});

export default connect(mSTP, mDTP)(BookingForm);