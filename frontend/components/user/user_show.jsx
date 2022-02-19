import React from 'react';
import UserEditFormContainer from './user_editform_container';
import { Route, Link, withRouter } from 'react-router-dom';
import UserReviewIndexContainer from '../review/user_review_index_container';
import UserBookingIndexContainer from '../booking/user_booking_index_container';
import UserFavIndexContainer from './user_fav_index_container';

const UserShow = ({ currentUser }) => {
    return (
        <div className="user-show-main">
            <div className="show-header"><h1>{currentUser.fname}</h1></div>
            <div className="flex-container">
                <aside className="left">
                    <ul>
                        <Link to={`/users/${currentUser.id}/account`}>Account Details</Link>
                        <Link to={`/users/${currentUser.id}/bookings`}>Reservations</Link>
                        <Link to={`/users/${currentUser.id}/fav`}>Saved Restaurants</Link>
                        <Link to={`/users/${currentUser.id}/reviews`}>Reviews</Link>
                    </ul>
                </aside>
                <div className="form-section">
                    <div className="user-row"></div>
                    <Route exact path={`/users/:userId/account`} component={UserEditFormContainer} />
                    <Route exact path={`/users/:userId/reviews`} component={UserReviewIndexContainer} />
                    <Route exact path={`/users/:userId/bookings`} component={UserBookingIndexContainer} />
                    <Route exact path={`/users/:userId/fav`} component={UserFavIndexContainer} />
                </div>
                <aside className="right">
                </aside >
            </div>
        </div>
    )
};

export default withRouter(UserShow);