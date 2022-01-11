import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mSTP = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reviewOut: ownProps.reviewOut
});


const mDTP = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review)),
    closeReview: () => ownProps.closeReview()
});

export default connect(mSTP, mDTP)(ReviewForm);