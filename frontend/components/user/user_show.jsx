import React from 'react';
import UserEditFormContainer from './user_editform_container';
import { Route, Link } from 'react-router-dom';
import ReviewIndexContainer from '../review/review_index_container';

const UserShow = ({ currentUser }) => {
    return (
        <div className="user_show_main">
            <div className="show_header"><h1>{currentUser.fname}</h1></div>
            <div className="flex_container">
                <aside className="left">
                    <ul>
                        <Link to={`/users/${currentUser.id}/account`}>Account Details</Link>
                        <Link to={`/users/${currentUser.id}/rsvp`}>Reservations</Link>
                        <Link to={`/users/${currentUser.id}/fav`}>Saved Restaurants</Link>
                        <Link to={`/users/${currentUser.id}/reviews`}>Reviews</Link>
                    </ul>
                </aside>
                <div className="form_section">
                    <div className="user_row"></div>
                    <Route exact path={`/users/${currentUser.id}/account`} component={UserEditFormContainer} />
                    <Route exact path={`/users/${currentUser.id}/reviews`} component={ReviewIndexContainer} />
                </div>
                <aside className="right">
                </aside >
            </div>
        </div>
    )
};

export default UserShow;