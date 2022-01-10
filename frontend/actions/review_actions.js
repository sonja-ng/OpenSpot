import * as reviewApiUtil from '../util/review_api_utils';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';


export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = review => {
    debugger
    return {
    type: RECEIVE_REVIEW,
    review
}};

export const removeReview = reviewId => {
    debugger
    return {
    type: REMOVE_REVIEW,
    reviewId
}};

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const createReview = review => dispatch => {
    debugger
    return reviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
}

export const fetchReviews = reviews => dispatch => {
    return reviewApiUtil.fetchReviews(reviews).then(reviews => dispatch(receiveReviews(reviews)))
}

export const updateReview = review => dispatch => (
    reviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
)

export const deleteReview = reviewId => dispatch => (
    reviewApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review.id)))
)