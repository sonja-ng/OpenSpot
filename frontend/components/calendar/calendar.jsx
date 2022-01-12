import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    )
}

export default BookingCalendar;