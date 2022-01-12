import { connect } from 'react-redux';
import RestIndex from './rest_index';
import { fetchRests } from '../../actions/rest_actions';

const mSTP = state => ({
    rests: Object.values(state.entities.rests)
});

const mDTP = dispatch => ({
    fetchRests: () => dispatch(fetchRests())
});

export default connect(mSTP, mDTP)(RestIndex);