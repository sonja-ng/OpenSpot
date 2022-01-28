import React from 'react';
import { updateReview } from '../../util/review_api_utils';
import ReviewEditFormContainer from '../form/review_edit_form_container';
import { withRouter, Link } from 'react-router-dom';

class UserReviewIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            reviewEditOut: false,
            starRating: []
        }

        this.openEditReview = this.openEditReview.bind(this);
        this.closeEditReview = this.closeEditReview.bind(this);
        this.renderStars = this.renderStars.bind(this);
    }

    componentDidMount(){
        const fillRating = [...Array(this.props.review.overall).keys()]
        this.setState({ starRating: fillRating});
    }

    componentDidUpdate(prevProps){
        if (this.props.review.overall !== prevProps.review.overall) {
            const fillNewRating = [...Array(this.props.review.overall).keys()]
            this.setState({ starRating: fillNewRating })
        }
    }

    openEditReview(){
        this.setState({reviewEditOut: true });
    }

    closeEditReview(){
        this.setState({reviewEditOut: false});
    }

    renderStars(){
        let fullStars;
        let emptyStars;

        if (this.state.starRating.length === 5){
            return (this.state.starRating.map((rating, idx) => <span className="full" key={idx}>&#9733;&#160;</span>));
        } else {
            fullStars = this.state.starRating.map((rating, idx) => <span className="full" key={idx}>&#9733;&#160;</span>);
            const remainStars = [...Array(5 - this.state.starRating.length).keys()];
            emptyStars = remainStars.map((remain, idx) => <span className="empty" key={idx}>&#9733;&#160;</span>);
            return (<div>{fullStars}{emptyStars}</div>)
        }
    } 

    render(){
        const { review, currentUser, deleteReview } = this.props;
        const edit = !currentUser || currentUser.id !== review.author_id ? (
            null    
        ) : (
            <div className="review-buttons">
                <button className="review-edit-button" onClick={this.openEditReview}><i className="far fa-edit"></i></button>  
                <button className="review-delete-button" onClick={()=> deleteReview(review.id)}><i className="far fa-trash-alt"></i></button>
            </div>
        )
            // debugger
        return (
            <div>
                <li className="user-review-row">
                    <div className="restaurant">
                    <div className="restaurant-link"><Link to={`/rests/${review.rest_id}`}>{review.restaurant.name}</Link></div>
                    <div className="review-cuisine">{review.restaurant.cuisine}</div>
                    <div className="review-cuisine">{review.restaurant.neighborhood}</div>
                    </div>
                    <div className="review-content">
                        <div className="stars">{ this.renderStars() }</div>
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