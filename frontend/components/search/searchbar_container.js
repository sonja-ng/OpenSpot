import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { updateFilter } from '../../actions/search_actions';
import { fillInBooking } from '../../actions/booking_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fillInBooking: (booking) => dispatch(fillInBooking(booking))
});

export default connect(mSTP, mDTP)(SearchBar);