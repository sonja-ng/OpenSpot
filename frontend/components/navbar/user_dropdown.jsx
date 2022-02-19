import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const UserDropDown = ({ selected, logout, currentUser, toggle }) => {
        const klass = selected ? "dropdown-ul" : "hidden";
        return (
            <div className={klass}>
                <div className="dropdown-title">Hello, {currentUser.fname}!</div>
                <ul>
                <li><Link to={`/users/${currentUser.id}/account`} onClick={toggle}>My Profile</Link></li>
                <li><Link to={`/users/${currentUser.id}/bookings`} onClick={toggle}>My Reservations</Link></li>
                <li><Link to={`/users/${currentUser.id}/fav`} onClick={toggle}>My Saved Restaurants</Link></li>
                <li onClick={logout}>Sign Out</li>
                </ul>
            </div>
        )
}

export default withRouter(UserDropDown);