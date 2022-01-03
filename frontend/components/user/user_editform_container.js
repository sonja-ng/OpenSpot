import { connect } from 'react-redux';
import { receiveUserInfo } from '../../actions/user_actions'
import { updateUser } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // debugger
    return {
    currentUser: state.entities.users[ownProps.match.params.userId]
}};

const mDTP = dispatch => {
    // debugger
    return {
        receiveUserInfo: (user) => dispatch(receiveUserInfo(user)),
        updateUser: (user) => dispatch(updateUser(user))
    }
};

export default withRouter(connect(mSTP, mDTP)(UserEditForm));