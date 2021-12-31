import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.resetSessionErrors = this.resetSessionErrors.bind(this);
        this.resetUserErrors = this.resetUserErrors.bind(this);
    }

    resetSessionErrors(){
        this.props.removeSessionErrors();
    }

    resetUserErrors(){
        this.props.removeUserErrors();
    }

    render(){
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <h1>hello {currentUser.username}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        ) : 
        (
            <div>
                <Link to="/signup" onClick={this.resetUserErrors}>Sign Up</Link>
                <Link to="/login" onClick={this.resetSessionErrors}>Login</Link>
            </div>
        )
        return (
            <div>
                {display}
            </div>
        )
    }
};

export default Navbar;