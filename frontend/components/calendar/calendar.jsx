import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import React from 'react';

class BookingCalendar extends React.Component {
    render(){
        return (
            <div>
                {/* <DatePicker /> */}
                <Calendar />
            </div>
        )
    }
}

export default BookingCalendar;