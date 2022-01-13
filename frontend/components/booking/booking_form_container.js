import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    date: state.entities.bookings.date,
    time: state.entities.bookings.time,
    party_size: state.entities.bookings.party_size,
    restaurant: state.entities.rests[state.entities.bookings.rest_id],
    booking: state.entities.bookings
});

const mDTP = dispatch => ({
    createBooking: (booking) => dispatch(createBooking(booking)),
});

export default connect(mSTP, mDTP)(BookingForm);