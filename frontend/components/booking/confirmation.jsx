import React from 'react';

class Confirmation extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="confirmation-container">
                <div className="confirm-bg">
                    <div className="confirm-main">
                        <div className="confirm-rest-name">CheLi</div>
                        <div className="confirm-details">
                            <div className="check">
                               <img src={window.greencheckURL} alt="green check"/>
                               <div>Reservation Confirmed</div>
                            </div>
                            <div className="flex-details">
                                <div className="confirm-items"><i className="far fa-user"></i>2</div>
                                <div className="confirm-items">
                                <i className="far fa-calendar"></i>2022-02-10 at 1:30PM
                                </div>  
                            </div>
                            <div className="confirm-button-row">
                                <button className="c-button">Modify</button>
                               <button className="c-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <aside className="user-info">
                        <div className="user-fname"><i className="far fa-user"></i>Sonja Ng</div>
                    </aside>
                </div>
                <div className="grey-bg"></div>
            </div>
        )
    }
}

export default Confirmation;