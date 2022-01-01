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
        this.preventScrolling();
    }

    resetUserErrors(){
        this.props.removeUserErrors();
        this.preventScrolling();
    }

    preventScrolling(){
        document.body.classList.add("disable_scroll");
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
            <div className="right_navbar">
                <div>
                    <Link to="/signup" className="signup_button" onClick={this.resetUserErrors}>Sign Up</Link>
                </div>
                <div>
                    <Link to="/login" className="login_button" onClick={this.resetSessionErrors}>Login</Link>
                </div>
                <div>
                    <span className="search_icon"><i className="fas fa-search"></i></span>
                </div>
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