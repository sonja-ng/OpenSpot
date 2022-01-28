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
        
        const upcomingBookingList = upcomingBookings.map((booking, idx) => <UserBookingIndexItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)

        const pastBookings = bookings.filter(booking => new Date(booking.date) < new Date());

        const pastBookingList = pastBookings.map((booking, idx) => <UserBookingIndexItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)

        return (
            <div className="review-bg">
                <ul>
                    <div className="my-bookings"><h3>My Upcoming Reservations</h3></div>
                    {upcomingBookingList}
                    <div className="my-bookings"><h3>My Past Reservations</h3></div>
                    {pastBookingList}
                </ul>
            </div>
        )
    }

}

export default UserBookingIndex;