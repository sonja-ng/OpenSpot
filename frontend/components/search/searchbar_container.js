import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { updateFilter } from '../../actions/search_actions';

// const mSTP = state => ({

// });

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(null, mDTP)(SearchBar);