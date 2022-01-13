import React from 'react';

class UserRsvpIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
            this.props.clearBookings();
            this.props.fetchBookings({["user_id"]: this.props.currentUser.id});
    }

    render(){
        if (!this.props.rsvps) return null;
    
        const { rsvps, currentUser, deleteBooking } = this.props;
        const rsvpList = rsvps.map((booking, idx) => <UserRsvpIndexItem key={idx} booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)
        const header = !this.props.match.params.restId ? "my-rsvps" : "hidden";

        return (
            <ul>
                <div className={header}><h3>My Reservations</h3></div>
                {rsvpList}
            </ul>
        )
    }

}

export default UserRsvpIndex;