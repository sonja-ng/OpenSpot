import React from 'react';
import ReviewIndexItem from './review_index_item';
import { withRouter } from 'react-router-dom';


class ReviewIndex extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // debugger
        if (this.props.match.params.restId) {
            this.props.fetchReviews({["restId"]: this.props.match.params.restId});
        } else {
            this.props.fetchReviews({["authorId"]: this.props.currentUser.id});
        }
    }

    componentDidUpdate(prevProps){
        // debugger
        if (this.props.reviews.length !== prevProps.reviews.length || this.props.history.location.pathname !== prevProps.history.location.pathname) {
            if (this.props.match.params.restId) {
                return this.props.fetchReviews({["restId"]: this.props.match.params.restId});
            } else {
                this.props.fetchReviews({["authorId"]: this.props.currentUser.id});
            }
        }
    }

    render(){
        // debugger
        if (!this.props.reviews) return null;
    
        const { reviews, currentUser, deleteReview } = this.props;
        const reviewList = reviews.map((review, idx) => <ReviewIndexItem key={idx} review={review} currentUser={currentUser} deleteReview={deleteReview} />)
        return (
            <ul>
                {reviewList}
            </ul>
        )
    }

}

export default withRouter(ReviewIndex);