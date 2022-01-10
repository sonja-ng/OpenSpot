import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props){
        super(props);
    }




    render(){
        const { review, currentUser, deleteReview } = this.props;
        
        const edit = !currentUser || currentUser.id !== review.author_id ? (
            null    
        ) : (
            <button onClick={()=> deleteReview(review.id)}>Delete Review</button>
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
                </li>
            </ul>
        )
    }
}

export default ReviewIndexItem;