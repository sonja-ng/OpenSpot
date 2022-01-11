import React from 'react';
import { updateReview } from '../../util/review_api_utils';
import ReviewEditFormContainer from '../form/review_edit_form_container';

class ReviewIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            reviewEditOut: false
        }

        this.openEditReview = this.openEditReview.bind(this);
        this.closeEditReview = this.closeEditReview.bind(this);
    }

    openEditReview(){
        debugger
        this.setState({reviewEditOut: true });
    }

    closeEditReview(){
        this.setState({reviewEditOut: false});
    }

    render(){
        const { review, currentUser, deleteReview } = this.props;
        const edit = !currentUser || currentUser.id !== review.author_id ? (
            null    
        ) : (
            <div>
                <button onClick={()=> deleteReview(review.id)}>Delete</button>
                <button onClick={this.openEditReview}>Edit</button>
            </div>
        )
        return (
            <ul>
                <li className="review-row">
                    <div className="reviewer">
                        <div className="icon">{review.author.username.slice(0, 1)}</div>
                        <p>{review.author.username}</p>
                    </div>
                    <div className="review-content">
                        <p>{review.comment}</p>
                        <p>{review.rating}</p>
                        {edit}
                    </div>
                    <ReviewEditFormContainer reviewEditOut={this.state.reviewEditOut} closeEditReview={this.closeEditReview} review={review}/>
                </li>
            </ul>
        )
    }
}

export default ReviewIndexItem;