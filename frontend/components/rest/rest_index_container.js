import { connect } from 'react-redux';
import RestIndex from './rest_index';
import { fetchRests } from '../../actions/rest_actions';
import { fillInOneFieldBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    rests: Object.values(state.entities.rests),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchRests: () => dispatch(fetchRests()),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(RestIndex);