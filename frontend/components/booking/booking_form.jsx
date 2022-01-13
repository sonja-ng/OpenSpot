import React from 'react';

class BookingForm extends React.Component {
    constructor(props){
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBooking(this.props.booking)
    }

    render(){
        // const { currentUser, booking, restaurant } = this.props;
        return (
            <div className="rsvp-main">
                <div className="booking-body">
                    <header>You are almost done!</header>
                    <div className="booking-info">
                        <div className="rest-name">Che Li</div>
                        <div className="booking-details">
                            <div className="booking-value"><i className="far fa-calendar"></i>2022/2/2</div>
                            <div className="booking-value"><i className="far fa-clock"></i>5:00</div>
                            <div className="booking-value"><i className="far fa-user"></i>2 people</div>
                        </div>
                    </div>
                    <div className="diner-details">
                        <header>Diner Details</header>
                        <form className="rsvp-form">
                            Sonja Ng
                            <div className="row-1">
                                <input className="phone" type="text" value="1234567"/>
                                <input className="email" type="text" value="guest@gmail.com"/>
                            </div>
                            <div className="row-2">
                                <select className="occasion" name="occasion" id="occasion">
                                    <option value="" disabled selected>Select an occasion(optional)</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Date Night">Date Night</option>
                                    <option value="Business Meal">Business Meal</option>
                                    <option value="Celebration">Celebration</option>
                                </select>
                                <textarea placeholder="Add a special request (optional)"/>
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

export default BookingForm;