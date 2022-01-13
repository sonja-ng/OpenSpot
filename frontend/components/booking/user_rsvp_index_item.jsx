import React from 'react';
import { updateReview } from '../../util/review_api_utils';
import BookingEditFormContainer from '../form/review_edit_form_container';
import { withRouter, Link } from 'react-router-dom';

class UserReviewIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            bookingEditOut: false
        }

        this.openEditBooking = this.openEditBooking.bind(this);
        this.closeEditBooking = this.closeEditBooking.bind(this);
    }

    openEditBooking(){
        // debugger
        this.setState({bookingEditOut: true });
    }

    closeEditBooking(){
        this.setState({bookingEditOut: false});
    }

    render(){
        // debugger
        const { booking, currentUser, deleteBooking } = this.props;
        
        return (
            <div>
                <li className="user-review-row">
                    <div className="restaurant">
                    <div className="restaurant-link"><Link to={`/rests/${review.rest_id}`}>{review.restaurant.name}</Link></div>
                    <div className="review-cuisine">{review.restaurant.cuisine}</div>
                    <div className="review-cuisine">{review.restaurant.neighborhood}</div>
                    </div>
                    <div className="review-content">
                        <div className="review-header">
                        <div className="flex-details">
                                <div className="confirm-items"><i className="far fa-user"></i>{this.props.booking.party_size}</div>
                                <div className="confirm-items">
                                <i className="far fa-calendar"></i>{this.props.booking.date} at {this.props.booking.time.slice(12, 16)}PM
                                </div>  
                            </div>
                        </div>
                        <p>{review.comment}</p>
                        <div className="review-buttons">
                            <button className="review-edit-button" onClick={this.openEditReview}>Edit</button>  
                            <button className="review-delete-button" onClick={()=> deleteReview(review.id)}>Delete</button>
                        </div>
                    </div>
                    <BookingEditFormContainer bookingEditOut={this.state.bookingEditOut} closeBooking={this.closeBooking} booking={booking}/>
                </li>
            </div> 
        )
    }
}

export default withRouter(UserReviewIndexItem);