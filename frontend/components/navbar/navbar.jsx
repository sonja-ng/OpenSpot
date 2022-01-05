import React from "react";
import { Link } from 'react-router-dom';
import UserNavBar from "./user_navbar";

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.resetSessionErrors = this.resetSessionErrors.bind(this);
        this.resetUserErrors = this.resetUserErrors.bind(this);
        this.enableScrolling = this.enableScrolling.bind(this);
    }

    resetSessionErrors(){
        this.props.removeSessionErrors();
        this.preventScrolling();
        this.props.openModal("login");
    }

    componentDidMount(){
        this.enableScrolling();
    }

    enableScrolling(){
        document.body.classList.remove("disable_scroll");
    }

    resetUserErrors(){
        this.props.removeUserErrors();
        this.preventScrolling();
        this.props.openModal("signup");
    }

    preventScrolling(){
        document.body.classList.add("disable_scroll");
    }



    render(){
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <UserNavBar logout={logout} enableScrolling={this.enableScrolling} currentUser={currentUser}/>
        ) : 
        (
            <div className="right_navbar">
                <div>
                    <button className="signup_button" onClick={this.resetUserErrors}>Sign Up</button>
                </div>
                <div>
                    <button className="login_button" onClick={this.resetSessionErrors}>Login</button>
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