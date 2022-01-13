import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ rest, fillInOneFieldBooking }) => {
    const image = rest.photos[2].url;
    // debugger
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
                        <Link to="/booking" onClick={()=> fillInOneFieldBooking("rest_id", rest.id)}><button className="result-button">2:15pm</button></Link>
                        <button className="result-button">5:30pm</button>
                        <button className="result-button">6:45pm</button>
                        <button className="result-button">7:30pm</button>
                        <button className="result-button">8:45pm</button>
                    </div>
                </div>
            </li>
       
    )
}

export default SearchIndexItem;