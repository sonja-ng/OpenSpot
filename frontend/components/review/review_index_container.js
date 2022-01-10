import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createReview, updateReview, deleteReview, fetchReviews } from '../../actions/review_actions';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchReviews: data => dispatch(fetchReviews(data)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewIndex);