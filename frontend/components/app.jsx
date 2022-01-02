import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchBar from './searchbar';
import smallLogo from '../../app/assets/images/smallheaderlogo.png'; 


const App = () => (
    <div className="main_index">
        <header>
            <div className="top_bar"></div>
            <div className="left_navbar">
                <Link to="/" className="logo_bar">
                    <img src={smallLogo}/>
                </Link>
                <span className="marker_icon">
                    <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="location_nav"><p>New York / Tri-State Area</p></div>
            </div>
            <NavBarContainer />
        </header>
        <SearchBar />
        <div className="main_content">
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </div>
        <footer>
            <div className="footer_maintitle">This project is a clone of OpenTable.</div>
            <div className="footer_row">
                <div className="footer_col_left">
                    <ul>
                        <div className="footer_title">Technologies Used:</div>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Ruby on Rails</li>
                        <li>AWS S3</li>
                        <li>SASS HTML5</li>
                    </ul>
                </div>
                <div className="footer_col_right">
                    <ul>
                        <div className="footer_title">Links:</div>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                        <li>Other Projects</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
);

export default App;