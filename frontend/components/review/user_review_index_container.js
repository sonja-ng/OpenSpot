import { connect } from 'react-redux';
import UserReviewIndex from './user_review_index';
import { createReview, updateReview, deleteReview, fetchReviews, clearReviews } from '../../actions/review_actions';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchReviews: data => dispatch(fetchReviews(data)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    clearReviews: () => dispatch(clearReviews())
});

export default connect(mSTP, mDTP)(UserReviewIndex);