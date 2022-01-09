import { connect } from 'react-redux';
import RestShow from './rest_show';
import { fetchRest } from '../../actions/rest_actions';

const mSTP = (state, ownProps) => {
        // debugger
    return {
    rest: state.entities.rests[ownProps.match.params.restId]
}};

const mDTP = dispatch => {
    // debugger
    return {
    fetchRest: (id) => dispatch(fetchRest(id))
}};

export default connect(mSTP, mDTP)(RestShow);