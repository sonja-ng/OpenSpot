import { connect } from 'react-redux';
import RestShow from './rest_show';
import { fetchRest } from '../../actions/rest_actions';
import { openModal } from '../../actions/modal_actions';
import { addFavorite, removeFavorite } from '../../actions/favorite_actions';

const mSTP = (state, ownProps) => ({
    rest: state.entities.rests[ownProps.match.params.restId],
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
    favorites: Object.values(state.entities.favorites)
});

const mDTP = dispatch => ({
    addFavorite: (id) => dispatch(addFavorite(id)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    fetchRest: (id) => dispatch(fetchRest(id)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(RestShow);