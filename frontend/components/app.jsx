import React from 'react';
import NavBarContainer from './navbar_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <h1>Open Spot</h1>
            <NavBarContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;