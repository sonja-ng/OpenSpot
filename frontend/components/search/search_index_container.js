import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchRests } from '../../actions/rest_actions';
import { updateFilter } from '../../actions/search_actions';
import { fillInBooking, fillInOneFieldBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    rests: Object.values(state.entities.rests),
    currentUser: state.entities.users[state.session.id],
    searchTerms: Object.values(state.entities.search).map(search => search.toLowerCase()),
    capTerms: Object.values(state.entities.search),
    tentativeBooking: state.entities.bookings.tentativeBooking
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    fetchRests: (data) => dispatch(fetchRests(data)),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(SearchIndex); 