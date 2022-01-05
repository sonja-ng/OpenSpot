import React from 'react';
import UserEditFormContainer from './user_editform_container';

const UserShow = ({ currentUser }) => {
    return (
        <div className="user_show_main">
            <div className="show_header"><h1>{currentUser.fname}</h1></div>
            <div className="flex_container">
                <aside className="left">
                    <ul>
                        <li>Account Details</li>
                        <li>Reservations</li>
                        <li>Saved Restaurants</li>
                        <li>Reviews</li>
                        <Link to={`/users/${currentUser.id}/rests/`}>My Restaurants</Link>
                    </ul>
                </aside>
                <div className="form_section">
                    <div className="user_row"></div>
                    <UserEditFormContainer />
                </div>
                <aside className="right">
                </aside >
            </div>
        </div>
    )
};

export default UserShow;