import { connect } from 'react-redux';
import SearchForm from './search_form';
import { updateFilter } from '../../actions/search_actions';
import { fillInBooking, fillInOneFieldBooking } from '../../actions/booking_actions';

const mSTP = (state, ownProps) => {
    if (ownProps.searchOut) {
        return {
            currentUser: state.entities.users[state.session.id],
            tentativeBooking: state.entities.bookings.tentativeBooking,
            searchTerms: Object.values(state.entities.search).map(search => search.toLowerCase()),
            capTerms: Object.values(state.entities.search),
            searchOut: ownProps.searchOut
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id],
            tentativeBooking: state.entities.bookings.tentativeBooking,
            searchTerms: Object.values(state.entities.search).map(search => search.toLowerCase()),
            capTerms: Object.values(state.entities.search)
        }
    }
};

const mDTP = (dispatch, ownProps) => {
    if (ownProps.closeSearch){
        return {     
            updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
            fillInBooking: (booking) => dispatch(fillInBooking(booking)),
            fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value)),
            closeSearch: ownProps.closeSearch
        }
    } else {
        return {
            updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
            fillInBooking: (booking) => dispatch(fillInBooking(booking)),
            fillInOneFieldBooking: (cat, value) => dispatch(fillInOneFieldBooking(cat, value))
        }
    }
};

export default connect(mSTP, mDTP)(SearchForm);