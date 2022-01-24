import React from 'react';
import UserReviewIndexItem from './user_review_index_item';
import { withRouter } from 'react-router-dom';


class UserReviewIndex extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
            this.props.clearReviews();
            this.props.fetchReviews({["authorId"]: this.props.currentUser.id});
    }

    componentWillUnmount(){
        this.props.clearReviews();
    }

    render(){
        if (!this.props.reviews) return null;
    
        const { reviews, currentUser, deleteReview } = this.props;
        const reviewList = reviews.map((review, idx) => <UserReviewIndexItem key={idx} review={review} currentUser={currentUser} deleteReview={deleteReview} />)
        const header = !this.props.match.params.restId ? "my-reviews" : "hidden";
        return (
            <div className="review-bg">
                <ul>
                    <div className={header}><h3>My Reviews</h3></div>
                    {reviewList}
                </ul>
            </div>
        )
    }

}

export default withRouter(UserReviewIndex);