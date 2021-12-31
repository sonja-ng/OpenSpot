import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout, removeSessionErrors } from '../actions/session_actions';
import { removeUserErrors } from '../actions/user_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    userErrors: state.errors.users,
    sessionErrors: state.errors.session
});

const mDTP = dispatch => {
    return {
    logout: ()=> dispatch(logout()),
    removeSessionErrors: ()=> dispatch(removeSessionErrors()),
    removeUserErrors: ()=> dispatch(removeUserErrors())
}};

export default connect(mSTP, mDTP)(Navbar);