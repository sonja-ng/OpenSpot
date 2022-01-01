import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import { removeSessionErrors } from '../../actions/session_actions';


const mSTP = state => ({
    errors: state.errors.users
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(SignupForm);