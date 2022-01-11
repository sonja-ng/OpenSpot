import { RECEIVE_REST } from "../actions/rest_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        // case RECEIVE_REST:
        //     return Object.assign({}, nextState, action.rest.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, nextState, { [review.id]: review });
        case RECEIVE_REVIEWS:
            return Object.assign({}, nextState, action.reviews);
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return oldState;
    }
}

export default reviewsReducer;