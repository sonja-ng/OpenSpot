import { connect } from 'react-redux';
import { removeFavorite } from '../../actions/favorite_actions';
import UserFavIndex from './user_fav_index';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    favorites: Object.values(state.entities.favorites)
});

const mDTP = dispatch => ({
    removeFavorite: id => dispatch(removeFavorite(id))
})

export default connect(mSTP, mDTP)(UserFavIndex);