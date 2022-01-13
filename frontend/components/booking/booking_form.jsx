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
        return (
            <div>
                <button onClick={this.handleSubmit}>Complete Reservation</button>
            </div>
        )
    }
}

export default BookingForm;