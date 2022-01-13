import React from 'react';
import { Link } from 'react-router-dom';

class RestIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        // debugger
        e.stopPropagation();
        if (this.props.currentUser) {
            this.props.fillInOneFieldBooking("rest_id", this.props.rest.id);
            this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id);
            this.props.fillInOneFieldBooking("time", e.target.innerText.slice(0, 4));
        } else {
            this.props.openModal("login");
        }
    }

    render(){
         // if (rest.photos.length === 0) return null; 
    // const image = rest.photos[0].url;
        const { rest } = this.props;
    const whereTo = this.props.currentUser ? "/booking" : "/";
        return (
            <li className="rest-index-thumbnail">
                <Link to={`rests/${rest.id}`}>
                {/* <img src={image} className="thumbnail-img"/> */}
                <div className="thumbnail-img"></div>
                <div className="thumbnail-text">
                    <h1>{rest.name}</h1>
                    <div className="stars"><img src={window.starsURL}/></div>
                    <div className="thumbnail-detail">
                        <span>{rest.cuisine}</span>
                        <div className="price">$$$</div>
                        <span>{rest.neighborhood}</span>
                    </div>
                </div>
                </Link>
                <div className="button-row">
                <Link to={whereTo} onClick={this.handleClick}><button className="thumbnail-button">7:15pm</button></Link>
                    <button className="thumbnail-button">7:30pm</button>
                    <button className="thumbnail-button">7:45pm</button>
                </div>
            </li>
            
        )
    }

};
 
export default RestIndexItem;