import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import UserShowContainer from './user/user_show_container';
import RestIndexContainer from './rest/rest_index_container';
import ModalContainer from './modal_container';
import SearchIndexContainer from './search/search_index_container';
import ReviewIndexContainer from './review/review_index_container';
import UserEditFormContainer from './user/user_editform_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ConfirmationContainer from './booking/confirmation_container';
import BookingFormContainer from './booking/booking_form_container';
import { ProtectedRoute } from '../util/protected_route_util';
import RestShowContainer from './rest/rest_show_container';
import SearchBarContainer from './search/searchbar_container';


const App = () => (
    <div className="main_index">
        <ModalContainer />
        <header>
            <div className="top_bar"></div>
            <div className="left_navbar">
                <Link to="/" className="logo_bar">
                    <img src={window.logoURL}/>
                </Link>
                <span className="marker_icon">
                    <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="location_nav"><p>New York / Tri-State Area</p></div>
            </div>
            <NavBarContainer />
        </header>
        <div className="main_content">
            <Route exact path="/" component={SearchBarContainer} />
            <Route exact path="/" component={RestIndexContainer} />
            <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
            <Route path={"/rests/:restId"} component={RestShowContainer} />
            <Route exact path={"/search"} component={SearchIndexContainer} />
            <ProtectedRoute exact path={"/booking"} component={BookingFormContainer} />
            <ProtectedRoute exact path={"/confirmation"} component={ConfirmationContainer} />
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