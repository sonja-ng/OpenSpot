import { connect } from 'react-redux';
import SearchPopup from './search_popup';
import { fillInBooking } from '../../actions/booking_actions';
import { updateFilter } from '../../actions/search_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    searchOut: ownProps.searchOut
});

const mDTP = (dispatch, ownProps) => ({
    fillInBooking: (booking) => dispatch(fillInBooking(booking)),
    closeSearch: ()=> ownProps.closeSearch(),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mSTP, mDTP)(SearchPopup);