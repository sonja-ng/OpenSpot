import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h1>hello {currentUser.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    ) : 
    (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    )
    return (
        <div>
            {display}
        </div>
    )
};

export default Navbar;