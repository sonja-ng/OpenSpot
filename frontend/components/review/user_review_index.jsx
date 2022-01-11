import React from 'react';
import UserReviewIndexItem from './user_review_index_item';
import { withRouter } from 'react-router-dom';


class UserReviewIndex extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // debugger
            this.props.clearReviews();
            this.props.fetchReviews({["authorId"]: this.props.currentUser.id});
    }

    // componentDidUpdate(prevProps){
    //     debugger
    //     if (this.props.reviews.length !== prevProps.reviews.length) {
    //             this.props.fetchReviews({["authorId"]: this.props.currentUser.id})
    //     }
    // }

    componentWillUnmount(){
        this.props.clearReviews();
    }

    render(){
        // debugger
        if (!this.props.reviews) return null;
    
        const { reviews, currentUser, deleteReview } = this.props;
        const reviewList = reviews.map((review, idx) => <UserReviewIndexItem key={idx} review={review} currentUser={currentUser} deleteReview={deleteReview} />)
        const header = !this.props.match.params.restId ? "my-reviews" : "hidden";
        return (
            <ul>
                <div className={header}><h3>My Reviews</h3></div>
                {reviewList}
            </ul>
        )
    }

}

export default withRouter(UserReviewIndex);