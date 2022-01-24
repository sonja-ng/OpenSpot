import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { removeUserErrors } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    errors: state.errors.session
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    removeUserErrors: ()=> dispatch(removeUserErrors()),
    otherForm: ()=> dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm);