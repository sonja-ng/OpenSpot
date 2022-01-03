import React from 'react';

class UserDropDown extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { selected, logout, currentUser, removeDropDown, innerRef } = this.props;
           const klass = selected ? "dropdown_ul" : "hidden";
           
           return (
               <div className={klass} ref={innerRef}>
                   <div className="dropdown_title">Hello, {currentUser.fname}!</div>
                   <ul>
                   <li>My Profile</li>
                   <li>My Dining History</li>
                   <li>My Saved Restaurants</li>
                   <li onClick={logout}>Sign Out</li>
                   </ul>
               </div>
           )
    }
}


export default UserDropDown;