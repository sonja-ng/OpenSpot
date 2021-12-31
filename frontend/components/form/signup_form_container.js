import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';

const mSTP = state => ({
    errors: state.errors.users
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignupForm);