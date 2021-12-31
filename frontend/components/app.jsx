import React from 'react';
import NavBarContainer from './navbar_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>Open Spot</h1>
            <NavBarContainer />
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;