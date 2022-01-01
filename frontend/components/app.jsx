import React from 'react';
import NavBarContainer from './navbar_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchBar from './searchbar';


const App = () => (
    <div className="main_index">
        <header>
            <div className="top_bar"></div>
            <div className="logo"><h1>Open Spot</h1></div>
            <NavBarContainer />
        </header>
        <SearchBar />
        <div className="main_content">
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        </div>
        <footer>
            <h1>Footer Here</h1>
        </footer>
    </div>
);

export default App;