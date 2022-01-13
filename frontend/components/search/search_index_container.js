import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchRests } from '../../actions/rest_actions';
import { updateFilter } from '../../actions/search_actions';
import { fillInOneFieldBooking } from '../../actions/booking_actions';

const mSTP = state => ({
    rests: Object.values(state.entities.rests)
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchRests: (data) => dispatch(fetchRests(data)),
    fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value))
});

export default connect(mSTP, mDTP)(SearchIndex);