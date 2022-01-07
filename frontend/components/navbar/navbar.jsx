import React from "react";
import { Link, withRouter } from 'react-router-dom';
import UserNavBar from "./user_navbar";
import SearchPopup from './search_popup';

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected: false,
            searchOut: false,
        }

        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
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

    showSearch(){
        // debugger
        this.setState({ searchOut: true });
        // debugger
    }

    closeSearch(){
        this.setState({ searchOut: false });
    }

    render(){
        const { currentUser, logout, updateFilter } = this.props;
        const display = currentUser ? (
            <UserNavBar logout={logout} enableScrolling={this.enableScrolling} currentUser={currentUser} updateFilter={updateFilter}/>
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
                    <button className="search_icon" onClick={this.showSearch}><i className="fas fa-search"></i></button>
                </div>
            </div>
        )

        return (
            <div>
                {display}
                <SearchPopup closeSearch={this.closeSearch} searchOut={this.state.searchOut} updateFilter={updateFilter}/>
            </div>
        )
    }
};

export default withRouter(Navbar);