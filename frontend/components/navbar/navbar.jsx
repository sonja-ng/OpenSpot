import React from "react";
import { withRouter } from 'react-router-dom';
import UserNavBar from "./user_navbar";
import SearchPopupContainer from './search_popup_container';

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
        document.body.classList.remove("disable-scroll");
    }

    resetUserErrors(){
        this.props.removeUserErrors();
        this.preventScrolling();
        this.props.openModal("signup");
    }

    preventScrolling(){
        document.body.classList.add("disable-scroll");
    }

    showSearch(){
        this.setState({ searchOut: true });
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
            <div className="right-navbar">
                <div>
                    <button className="signup-button" onClick={this.resetUserErrors}>Sign Up</button>
                </div>
                <div>
                    <button className="login-button" onClick={this.resetSessionErrors}>Login</button>
                </div>
                <div>
                    <button className="search-icon" onClick={this.showSearch}><i className="fas fa-search"></i></button>
                </div>
            </div>
        )

        return (
            <div>
                {display}
                <SearchPopupContainer closeSearch={this.closeSearch} searchOut={this.state.searchOut} updateFilter={updateFilter}/>
            </div>
        )
    }
};

export default withRouter(Navbar);