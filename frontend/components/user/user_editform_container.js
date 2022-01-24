import { connect } from 'react-redux';
import { receiveUserInfo, updateUser } from '../../actions/user_actions'
import UserEditForm from './user_edit_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.users,
    id: state.session.id
});

const mDTP = dispatch => ({
        receiveUserInfo: (user) => dispatch(receiveUserInfo(user)),
        updateUser: (user) => dispatch(updateUser(user))
    }
);

export default withRouter(connect(mSTP, mDTP)(UserEditForm));