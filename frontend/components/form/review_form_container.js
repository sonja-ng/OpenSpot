import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, removeReviewErrors } from '../../actions/review_actions';

const mSTP = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reviewOut: ownProps.reviewOut,
    errors: state.errors.reviews
});


const mDTP = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review)),
    closeReview: () => ownProps.closeReview(),
    removeReviewErrors: () => dispatch(removeReviewErrors())
});

export default connect(mSTP, mDTP)(ReviewForm);