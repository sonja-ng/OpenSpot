import React from 'react';
import { updateReview } from '../../util/review_api_utils';
import ReviewEditFormContainer from '../form/review_edit_form_container';
import { withRouter, Link } from 'react-router-dom';

class UserReviewIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            reviewEditOut: false
        }

        this.openEditReview = this.openEditReview.bind(this);
        this.closeEditReview = this.closeEditReview.bind(this);
    }

    openEditReview(){
        // debugger
        this.setState({reviewEditOut: true });
    }

    closeEditReview(){
        this.setState({reviewEditOut: false});
    }

    render(){
        // debugger
        const { review, currentUser, deleteReview } = this.props;
        const edit = !currentUser || currentUser.id !== review.author_id ? (
            null    
        ) : (
            <div className="review-buttons">
                <button className="review-edit-button" onClick={this.openEditReview}>Edit</button>  
                <button className="review-delete-button" onClick={()=> deleteReview(review.id)}>Delete</button>
            </div>
        )
            
       
        
        return (
            <div>
                <li className="user-review-row">
                    <div className="restaurant">
                    <div className="restaurant-link"><Link to={`/rests/${review.rest_id}`}>{review.restaurant.name}</Link></div>
                    <div className="review-cuisine">{review.restaurant.cuisine}</div>
                    <div className="review-cuisine">{review.restaurant.neighborhood}</div>
                    </div>
                    <div className="review-content">
                        <div className="stars"><img src={window.starsURL} alt="stars"/></div>
                        <div className="review-header">
                            <div className="rating-cat">Overall</div>
                            <div className="rating-value">{review.overall}</div>
                            <div className="rating-cat">&#8226;&#160;&#160;Food</div>
                            <div className="rating-value">{review.food}</div>
                            <div className="rating-cat">&#8226;&#160;&#160;Service</div>
                            <div className="rating-value">{review.service}</div>
                            <div className="rating-cat">&#8226;&#160;&#160;Ambience</div>
                            <div className="rating-value">{review.ambience}</div>
                        </div>
                        <p>{review.comment}</p>
                        {edit}
                    </div>
                    <ReviewEditFormContainer reviewEditOut={this.state.reviewEditOut} closeEditReview={this.closeEditReview} review={review}/>
                </li>
            </div> 
        )
    }
}

export default withRouter(UserReviewIndexItem);