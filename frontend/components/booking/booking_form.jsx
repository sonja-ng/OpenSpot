import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
                occasion: "",
                phone: "",
                special: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateOccasion = this.updateOccasion.bind(this);
        this.updateSpecial = this.updateSpecial.bind(this);
    }
    updatePhone(e){
        this.setState({phone: e.target.value})
    }

    updateOccasion(e){
        this.setState({occasion: e.target.value})
    }

    updateSpecial(e){
        this.setState({special: e.target.value})
    }


    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.createBooking(this.props.booking).then(()=>this.props.history.push("/confirmation"))
    }

    render(){
        const { currentUser, booking, restaurant } = this.props;

        const formattedDate = typeof booking.date !== "string" ? `${booking.date.getFullYear()}-${booking.date.getMonth()+1}-${booking.date.getDate()}` : booking.date;
        return (
            <div className="rsvp-main">
                <div className="booking-body">
                    <header>You are almost done!</header>
                    <div className="booking-info">
                        <div className="rest-name">{restaurant.name}</div>
                        <div className="booking-details">
                            <div className="booking-value"><i className="far fa-calendar"></i>{formattedDate}</div>
                            <div className="booking-value"><i className="far fa-clock"></i>{booking.time} PM</div>
                            <div className="booking-value"><i className="far fa-user"></i>{booking.party_size} people</div>
                        </div>
                    </div>
                    <div className="diner-details">
                        <header>Diner Details</header>
                        <form className="rsvp-form">
                            {currentUser.fname}
                            <div className="row-1">
                                <input className="phone" type="text" value={currentUser.phone} onChange={this.updatePhone}/>
                                <div className="email">{currentUser.email}</div>
                            </div>
                            <div className="row-2">
                                <select className="occasion" name="occasion" id="occasion" defaultValue="Select an occasion" onChange={this.updateOccasion}>
                                    <option value="Select an occasion" disabled>Select an occasion(optional)</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Date Night">Date Night</option>
                                    <option value="Business Meal">Business Meal</option>
                                    <option value="Celebration">Celebration</option>
                                </select>
                                <textarea placeholder="Add a special request (optional)" onChange={this.updateSpecial}/>
                            </div>
                            <button className="rsvp-button" onClick={this.handleSubmit}>Complete Reservation</button>
                        </form>
                    </div>
                    
                </div>
                <aside className="terms">
                    <div>What to know before you go</div>
                    <div>Important dining information</div>
                    <div className="light">
                        We have a 5 minute grace period. Please call us if you are running later than 5 minutes after your reservation time.
                    </div>
                    <div className="light">
                        We may contact you about this reservation, so please ensure your email and phone number are up to date.
                    </div>
                </aside>
            </div>
        )
    }
}

export default withRouter(BookingForm);