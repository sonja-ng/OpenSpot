import { connect } from 'react-redux';
import ReviewEditForm from './review_edit_form';
import { updateReview, fetchReview } from '../../actions/review_actions';

const mSTP = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reviewEditOut: ownProps.reviewEditOut,
    review: ownProps.review,
    errors: state.errors.reviews
});


const mDTP = (dispatch, ownProps) => ({
    fetchReview: id => dispatch(fetchReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
    closeEditReview: () => ownProps.closeEditReview()
});

export default connect(mSTP, mDTP)(ReviewEditForm);