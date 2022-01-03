import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { removeUserErrors } from '../../actions/user_actions';

const mSTP = state => ({
    errors: state.errors.session
});

const mDTP = dispatch => {
   return {
    login: user => dispatch(login(user)),
    removeUserErrors: ()=> dispatch(removeUserErrors())
}};

export default connect(mSTP, mDTP)(LoginForm);