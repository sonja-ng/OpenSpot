import React from 'react';
import UserBookingIndexItem from './user_booking_index_item';

class UserBookingIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
            this.props.clearBookings();
            this.props.fetchBookings({["userId"]: this.props.currentUser.id});
    }

    componentDidUpdate(prevProps){
        // debugger
        if (this.props.bookings.length !== prevProps.bookings.length){
            this.props.fetchBookings({["userId"]: this.props.currentUser.id});
        }    
    }

    render(){
        if (!this.props.bookings) return null;
        // debugger

        const { bookings, currentUser, deleteBooking } = this.props;
        const bookingList = bookings.map((booking, idx) => <UserBookingIndexItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)

        return (
            <div className="review-bg">
                <ul>
                    <div className="my-bookings"><h3>My Reservations</h3></div>
                    {bookingList}
                </ul>
            </div>
        )
    }

}

export default UserBookingIndex;