import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout, removeSessionErrors } from '../../actions/session_actions';
import { removeUserErrors } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/search_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    userErrors: state.errors.users,
    sessionErrors: state.errors.session
});

const mDTP = dispatch => ({
    logout: ()=> dispatch(logout()),
    removeSessionErrors: ()=> dispatch(removeSessionErrors()),
    removeUserErrors: ()=> dispatch(removeUserErrors()),
    openModal: modal => dispatch(openModal(modal)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(Navbar);