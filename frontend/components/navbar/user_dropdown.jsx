import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserDropDown extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { selected, logout, currentUser, toggle } = this.props;
           const klass = selected ? "dropdown_ul" : "hidden";
           return (
               <div className={klass}>
                   <div className="dropdown_title">Hello, {currentUser.fname}!</div>
                   <ul>
                   <li><Link to={`/users/${currentUser.id}/account`} onClick={toggle}>My Profile</Link></li>
                   <li onClick={toggle}>My Dining History</li>
                   <li onClick={toggle}>My Saved Restaurants</li>
                   <li onClick={logout}>Sign Out</li>
                   </ul>
               </div>
           )
    }
}


export default withRouter(UserDropDown);