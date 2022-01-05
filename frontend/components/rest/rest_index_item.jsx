import React from 'react';
import { Link } from 'react-router-dom';

const RestIndexItem = ( {rest}) => {
    return (
        <Link to={`rests/${rest.id}`}>
        <li className="rest-index-thumbnail">
            <div className="thumbnail-img">thumbnail image</div>
            <div className="thumbnail-text">
                <h1>{rest.name}</h1>
                <div className="thumbnail-detail">
                    <span>{rest.cuisine}</span>
                    <div className="price">$$$</div>
                    <span>{rest.neighborhood}</span>
                </div>
            </div>
            <div className="button-row">
                <button className="thumbnail-button">7:15pm</button>
                <button className="thumbnail-button">7:30pm</button>
                <button className="thumbnail-button">7:45pm</button>
            </div>
        </li>
        </Link>
    )
};

export default RestIndexItem;