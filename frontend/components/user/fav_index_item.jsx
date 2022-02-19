import React from 'react';
import { Link } from 'react-router-dom';

const FavIndexItem = ({ favorite, removeFavorite }) => {
    return (
        <li className="fav-item">
            <div className="saved-rest-name">{favorite.restaurant.name}</div>
            <i className="fas fa-bookmark"></i><button onClick={()=> removeFavorite(favorite.id)} className="remove-fav"><span className="remove">Remove from saved restaurants</span></button>
            <div className="saved-rest-cuisine">{favorite.restaurant.cuisine} | {favorite.restaurant.neighborhood}</div>
            <Link to={`/rests/${favorite.rest_id}`} className="reserve-now" >Reserve Now</Link>
        </li>
    )
}

export default FavIndexItem;