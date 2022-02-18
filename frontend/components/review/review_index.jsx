import React from 'react';
import ReviewIndexItem from './review_index_item';
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
            this.props.fetchReviews({["restId"]: this.props.match.params.restId});
    }

    componentWillUnmount(){
        this.props.clearReviews();
    }

    componentDidUpdate(prevProps){
        if ( this.props.history.location.pathname !== prevProps.history.location.pathname) {
                this.props.fetchReviews({["restId"]: this.props.match.params.restId});
            } 
    }

    render(){
        if (!this.props.reviews) return null;
    
        const { reviews, currentUser, deleteReview } = this.props;
        const reviewList = reviews.map((review, idx) => <ReviewIndexItem key={idx} review={review} reviewId={review.id} currentUser={currentUser} deleteReview={deleteReview} />)
        const header = !this.props.match.params.restId ? "my-reviews" : "hidden";
        return (
            <ul>
                <div className={header}><h3>My Reviews</h3></div>
                {reviewList}
            </ul>
        )
    }

}

export default withRouter(ReviewIndex);