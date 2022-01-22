import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
    constructor(props){
        super(props);   
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if (this.props.currentUser) {
            this.props.fillInOneFieldBooking("rest_id", this.props.rest.id);
            this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id);
            this.props.fillInOneFieldBooking("time", e.target.innerText.slice(0, 4));
        } else {
            this.props.openModal("login");
        }
    }
    
    render(){
        const { rest, currentUser } = this.props;
        const image = rest.photos[2].url;
    // debugger
        const whereTo = currentUser ? "/booking" : "/search";
    return (
            <li className="search-result-index">
                {/* <img src={image} className="result-img"/> */}
                <div className="result-img"></div>
                <div className="result">
                    <Link className="result-text" to={`/rests/${rest.id}`}>{rest.name}</Link>
                    <div className="result-stars"><img src={window.starsURL}/></div>
                    <div className="thumbnail-detail">
                        <div className="price">$$$ &#8226;</div>
                        <div>{rest.cuisine} &#8226;</div>
                        <span>&#160;{rest.neighborhood}</span>
                    </div>
                    <div className="booked"><span><i className="fas fa-chart-line"></i>Booked 10 times today</span></div>
                    <div className="result-button-row">
                        <Link to={whereTo} onClick={this.handleClick}><button className="result-button">2:15pm</button></Link>
                        <Link to={whereTo} onClick={this.handleClick}><button className="result-button">5:30pm</button></Link>
                        <Link to={whereTo} onClick={this.handleClick}><button className="result-button">6:45pm</button></Link>
                        <Link to={whereTo} onClick={this.handleClick}><button className="result-button">7:30pm</button></Link>
                        <Link to={whereTo} onClick={this.handleClick}><button className="result-button">8:45pm</button></Link>
                    </div>
                </div>
            </li>
          )
    }
}

export default SearchIndexItem;