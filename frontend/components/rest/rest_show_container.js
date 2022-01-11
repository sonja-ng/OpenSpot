import { connect } from 'react-redux';
import RestShow from './rest_show';
import { fetchRest } from '../../actions/rest_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
        // debugger
    return {
    rest: state.entities.rests[ownProps.match.params.restId],
    currentUser: state.entities.users[state.session.id]
}};

const mDTP = dispatch => {
    // debugger
    return {
    fetchRest: (id) => dispatch(fetchRest(id)),
    openModal: (modal) => dispatch(openModal(modal))
}};

export default connect(mSTP, mDTP)(RestShow);