import React from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="confirmation-container">
                <div className="confirm-bg">
                    <div className="confirm-main">
                        <div className="confirm-rest-name">{this.props.restaurant.name}</div>
                        <div className="confirm-details">
                            <div className="check">
                               <img src={window.greencheckURL} alt="green check"/>
                               <div>Reservation Confirmed</div>
                            </div>
                            <div className="flex-details">
                                <div className="confirm-items"><i className="far fa-user"></i>{this.props.booking.party_size}</div>
                                <div className="confirm-items">
                                <i className="far fa-calendar"></i>{this.props.booking.date} at {this.props.booking.time.slice(12, 16)}PM
                                </div>  
                            </div>
                            <div className="confirm-button-row">
                                <Link to="/modify" onClick={this.props.clearTentativeBooking} className="c-button">Modify</Link>
                               <button className="c-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <aside className="user-info">
                        <div className="user-fname"><i className="far fa-user"></i>{this.props.currentUser.fname}&#160;
                        {this.props.currentUser.lname}</div>
                    </aside>
                </div>
                <div className="grey-bg"></div>
            </div>
        )
    }
}

export default Confirmation;