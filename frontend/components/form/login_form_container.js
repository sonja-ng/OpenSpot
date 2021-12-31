import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session
});

const mDTP = dispatch => {
    // debugger
   return {
    login: user => dispatch(login(user))
}};

export default connect(mSTP, mDTP)(LoginForm);