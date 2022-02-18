import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { updateFilter } from '../../actions/search_actions';
import { fillInBooking, fillInOneFieldBooking } from '../../actions/booking_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    tentativeBooking: state.entities.bookings.tentativeBooking,
    searchTerms: Object.values(state.entities.rests).flatMap(el => [el.cuisine.toLowerCase(), el.neighborhood.toLowerCase(), el.name.toLowerCase()]),
    capTerms: Object.values(state.entities.rests).flatMap(el => [el.cuisine, el.neighborhood, el.name])
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value))
});

export default connect(mSTP, mDTP)(SearchBar);