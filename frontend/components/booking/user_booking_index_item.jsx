import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserBookingIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { booking, currentUser, deleteBooking, updateBooking } = this.props;
        if (!booking || !booking.restaurant) return null;
        const dateParts = booking.date.split('-');
        const dateObj = new Date(dateParts[0], dateParts[1]-1, dateParts[2]);

        return (
            <div>
                <li className="user-rsvp-row">
                    <div className="rsvp-rest">
                    <div className="restaurant-link">{booking.restaurant.name}</div>
                    <div className="rest-info">{booking.restaurant.cuisine}</div>
                    <div className="rest-info">{booking.restaurant.neighborhood}</div>
                    </div>
                    <div className="rsvp-content">
                        <div className="flex-details">
                                <div className="confirm-items"><i className="far fa-user"></i>{booking.party_size}</div>
                                <div className="confirm-items">
                                <i className="far fa-calendar"></i>{dateObj.toDateString()} at {booking.time.slice(12, 16)}PM
                                </div>  
                            </div>
                            <div className="confirm-button-row">
                                <Link to={`/update/${booking.id}`} onClick={this.props.clearTentativeBooking} className="c-button">Modify</Link>
                                <button onClick={()=> deleteBooking(booking.id)} className="c-button">Cancel</button>
                            </div>
                        </div>
                </li>
            </div> 
        )
    }
}

export default withRouter(UserBookingIndexItem);