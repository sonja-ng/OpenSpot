import { connect } from 'react-redux';
import RestBooking from './rest_booking';
import { fillInBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(RestBooking);