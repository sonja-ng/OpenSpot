import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

class RestBooking extends React.Component {
    constructor(props){
        super(props);

        this.state={
            date: new Date(),
            time: "12:00",
            party: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateParty = this.updateParty.bind(this);
    }

    updateDate(d){
        this.setState({date: d});
    }

    updateTime(e){
        e.preventDefault();
        this.setState({time: e.target.value})
    }

    updateParty(e){
        e.preventDefault();
        this.setState({party: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.fillInBooking({
                date: `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`,
                time: this.state.time,
                party_size: parseInt(this.state.party),
                user_id: this.props.currentUser.id,
                rest_id: this.props.match.params.restId
            });

            this.props.history.push("/booking");
        } else {
            this.props.openModal("login");
        }
        
    }

    render(){
        return (
            <div className="sticky-rsvp">
                <header>Make a reservation</header>
                <form className="rest-bookform">                
                    <div className="sticky-party">
                        <label>Party Size
                            <select className="rest-party" name="rest-party" id="rest-party" value={this.state.party} onChange={this.updateParty}>
                                <option value="2">For 2</option>
                                <option value="3">For 3</option>
                                <option value="4">For 4</option>
                                <option value="5">For 5</option>
                                <option value="6">For 6</option>
                                <option value="7">For 7</option>
                                <option value="8">For 8</option>
                                <option value="9">For 9</option>
                                <option value="10">For 10</option>
                                <option value="11">For 11</option>
                                <option value="12">For 12</option>
                                <option value="13">For 13</option>
                                <option value="14">For 14</option>
                                <option value="15">For 15</option>
                            </select>
                        </label>
                    </div>
                    <div className="date-time-container">
                        <label>Date<br></br>
                            <DatePicker className="rest-date-sticky" dateFormat="yyyy-MM-dd" minDate={new Date()} selected={this.state.date} onChange={this.updateDate}/>
                        </label>            
                        <label>Time<br></br>
                            <select name="rest-time" id="rest-time" value={this.state.time} className="rest-time" onChange={this.updateTime}>
                                <option value="12:00">12:00pm</option>
                                <option value="12:15">12:15pm</option>
                                <option value="12:30">12:30pm</option>
                                <option value="12:45">12:45pm</option>
                                <option value="01:00">1:00pm</option>
                                <option value="01:15">1:15pm</option>
                                <option value="01:30">1:30pm</option>
                                <option value="01:45">1:45pm</option>
                                <option value="02:00">2:00pm</option>
                                <option value="02:15">2:15pm</option>
                                <option value="02:30">2:30pm</option>
                                <option value="02:45">2:45pm</option>
                                <option value="03:00">3:00pm</option>
                                <option value="03:15">3:15pm</option>
                                <option value="03:30">3:30pm</option>
                                <option value="03:45">3:45pm</option>
                                <option value="04:00">4:00pm</option>
                                <option value="04:15">4:15pm</option>
                                <option value="04:30">4:30pm</option>
                                <option value="04:45">4:45pm</option>
                                <option value="05:00">5:00pm</option>
                                <option value="05:15">5:15pm</option>
                                <option value="05:30">5:30pm</option>
                                <option value="05:45">5:45pm</option>
                                <option value="06:00">6:00pm</option>
                                <option value="06:15">6:15pm</option>
                                <option value="06:30">6:30pm</option>
                                <option value="06:45">6:45pm</option>
                                <option value="07:00">7:00pm</option>
                                <option value="07:15">7:15pm</option>
                                <option value="07:30">7:30pm</option>
                                <option value="07:45">7:45pm</option>
                                <option value="08:00">8:00pm</option>
                                <option value="08:15">8:15pm</option>
                                <option value="08:30">8:30pm</option>
                                <option value="08:45">8:45pm</option>
                                <option value="09:00">9:00pm</option>
                                <option value="09:15">9:15pm</option>
                                <option value="09:30">9:30pm</option>
                                <option value="09:45">9:45pm</option>
                                <option value="10:00">10:00pm</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.handleSubmit} className="sticky-submit">Find a table</button>
                </form>
            </div>
        )
    }


}
export default withRouter(RestBooking);