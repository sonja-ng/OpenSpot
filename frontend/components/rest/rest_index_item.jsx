import React from 'react';

const RestIndexItem = ( {rest}) => {
    return (
        <li className="rest-index-thumbnail">
            <div className="thumbnail-img">thumbnail image</div>
            <h1>{rest.name}</h1>
            <p>{rest.cuisine}</p>
            <p>{rest.neighborhood}</p>
        </li>
    )
};

export default RestIndexItem;