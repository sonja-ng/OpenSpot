import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';

class ModifyBooking extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            date: new Date(this.props.booking.date),
            time: this.props.booking.time.slice(11, 16),
            party_size: this.props.booking.party_size,
            rest_id: this.props.booking.rest_id,
            user_id: this.props.booking.user_id,
            id: this.props.booking.id
        }

        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateParty = this.updateParty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateDate(d){
        this.setState({date: d},()=> this.props.fillInOneFieldBooking("date", `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`));
        
        this.props.fillInOneFieldBooking("rest_id", this.props.booking.rest_id);
        this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id); 
    }

    updateTime(e){
        e.preventDefault();
        this.setState({time: e.target.value},()=> this.props.fillInOneFieldBooking("time", this.state.time));
        
        this.props.fillInOneFieldBooking("rest_id", this.props.booking.rest_id);
        this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id);
    }

    updateParty(e){
        e.preventDefault();
        debugger
        this.setState({party_size: parseInt(e.target.value)},() => this.props.fillInOneFieldBooking("party", this.state.party_size));
        this.props.fillInOneFieldBooking("rest_id", this.props.booking.rest_id);
        this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id);
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.updateBooking(
            {   
                date: `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`,
                time: this.state.time,
                party_size: this.state.party_size,
                rest_id: this.state.rest_id,
                user_id: this.state.user_id,
                id: this.state.id
            }

        ).then(()=>this.props.history.push("/confirmation"));
    }

    render(){
        if (!this.props.booking) return null;
        const dateParts = this.props.booking.date.split('-');
        const dateObj = new Date(dateParts[0], dateParts[1]-1, dateParts[2]);

        return (
            <div className="modify-bg">
                    <div className="mod">
                    <div>Your reservation details</div>
                    <div className="mod-rest-row">
                        <div className="mod-rest">{this.props.booking.restaurant.name}</div>
                    </div>
                    </div>
                    <div className="flex-row-mod">
                        <div className="mod-details" >On {dateObj.toDateString()}</div>
                        <div className="mod-details" >at {this.props.booking.time.slice(12, 16)} PM</div>
                        <div className="mod-details" >for {this.props.booking.party_size} people</div>
                    </div>
                <form className="modify-form">
                    <DatePicker className="modify-date" dateFormat="yyyy-MM-dd" minDate={new Date()} selected={this.state.date} onChange={this.updateDate}/>
                    <select name="mod-time" id="mod-time-2" value={this.state.time} className="dropdown time" onChange={this.updateTime}>
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
                        <label>
                            <select className="dropdown party" name="mod-party" id="mod-party2" value={this.state.party_size} onChange={this.updateParty}>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>
                                <option value="10">11 people</option>
                                <option value="10">12 people</option>
                                <option value="10">13 people</option>
                                <option value="10">14 people</option>
                                <option value="10">15 people</option>
                            </select>
                        </label> 
                        <button onClick={this.handleSubmit} className="new-submit">Find a new table</button>
                </form>    
            </div>
        )
    }
}

export default withRouter(ModifyBooking);