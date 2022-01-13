import { connect } from 'react-redux';
import SearchPopup from './search_popup';
import { fillInBooking } from '../../actions/booking_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fillInBooking: (booking) => dispatch(fillInBooking(booking))
});

export default connect(mSTP, mDTP)(SearchPopup);