import React from 'react';
import UserBookingIndexItem from './user_booking_index_item';

class UserBookingIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
            this.props.clearBookings();
            this.props.fetchBookings({["userId"]: this.props.currentUser.id});
    }

    componentDidUpdate(prevProps){
        if (this.props.bookings.length !== prevProps.bookings.length){
            this.props.fetchBookings({["userId"]: this.props.currentUser.id});
        }    
    }

    render(){
        if (!this.props.bookings) return null;

        const { bookings, currentUser, deleteBooking } = this.props;
        const upcomingBookings = bookings.filter(booking => new Date(booking.date) > new Date());
        // debugger
        const upcomingBookingList = upcomingBookings.length > 0 ? (upcomingBookings.map((booking, idx) => <UserBookingIndexItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)) : (<div className="no-content"><h3>You have no upcoming reservations</h3></div>)

        const pastBookings = bookings.filter(booking => new Date(booking.date) < new Date());

        const pastBookingList = pastBookings.length > 0 ? (pastBookings.map((booking, idx) => <UserBookingIndexItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)) : (<div className="no-content"><h3>You have no past reservations</h3></div>)

        const bookingContent = bookings.length > 1 ? (
            <div>
                <div className="sub-header-booking">Upcoming</div>
                {upcomingBookingList}
                <div className="sub-header-booking">Past</div>
                {pastBookingList}
            </div>
        ) : (
            <div className="no-content"><h3>You have no reservations</h3></div>
        )

        return (
            <div className="review-bg">
                <ul>
                    <div className="my-bookings"><h3>My Reservations</h3></div>
                    {bookingContent}
                </ul>
            </div>
        )
    }

}

export default UserBookingIndex;