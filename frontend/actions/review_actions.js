import * as reviewApiUtil from '../util/review_api_utils';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';



export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = review => {
    // debugger
    return {
    type: RECEIVE_REVIEW,
    review
}};

export const clearReviews = () => ({
    type: CLEAR_REVIEWS
});

export const removeReview = reviewId => {
    // debugger
    return {
    type: REMOVE_REVIEW,
    reviewId
}};

export const receiveReviewErrors = errors => {
    // debugger
    return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
}};

export const removeReviewErrors = () => ({
    type: REMOVE_REVIEW_ERRORS
});

export const createReview = review => dispatch => {
    // debugger
    return reviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), errors => dispatch(receiveReviewErrors(errors.responseJSON)))
}

export const fetchReviews = reviews => dispatch => {
    return reviewApiUtil.fetchReviews(reviews).then(reviews => dispatch(receiveReviews(reviews)))
}

export const updateReview = review => dispatch => (
    reviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
)

export const fetchReview = id => dispatch => (
    reviewApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
)

export const deleteReview = reviewId => dispatch => (
    reviewApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review.id)))
)