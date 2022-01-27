import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import UserShowContainer from './user/user_show_container';
import RestIndexContainer from './rest/rest_index_container';
import ModalContainer from './modal_container';
import SearchIndexContainer from './search/search_index_container';
import { Link, Route } from 'react-router-dom';
import ConfirmationContainer from './booking/confirmation_container';
import BookingFormContainer from './booking/booking_form_container';
import { ProtectedRoute } from '../util/protected_route_util';
import RestShowContainer from './rest/rest_show_container';
import SearchBarContainer from './search/searchbar_container';
import ModifyRsvpContainer from './booking/modify_rsvp_container';
import ModifyBookingContainer from './booking/modify_booking_container';
import Cancel from './booking/cancel_confirm';


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
            <ProtectedRoute exact path={"/modify"} component={ModifyRsvpContainer} />
            <ProtectedRoute exact path={"/update/:bookingId"} component={ModifyBookingContainer} />
            <ProtectedRoute exact path={"/cancellation"} component={Cancel} />
            
        </div>
        <footer>
            <div className="footer_maintitle">This project is a clone of OpenTable.</div>
            <div className="footer_row">
                <div className="footer_col_left">
                    <ul>
                        <div className="footer_title">Technologies</div>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Ruby on Rails</li>
                        <li>AWS S3</li>
                        <li>HTML5/SASS</li>
                        <button className="footer-btn-credit" onClick={()=> window.open("https://github.com/sonja-ng/OpenSpot#image-credits")}>Image Attribution</button>
                    </ul>
                </div>
                <div className="footer-btn-row">
                    <button className="footer-btn" onClick={()=> window.open("https://github.com/sonja-ng")}><i className="fab fa-github-square"></i></button>
                    <button className="footer-btn" onClick={()=> window.open("https://www.linkedin.com/in/sonja-ng-a22aa513/")}><i className="fab fa-linkedin"></i></button>
                    <button className="footer-btn" onClick={()=> window.open("https://angel.co/u/sonja-ng")}><i className="fab fa-angellist"></i></button>
                </div>
            </div>
        </footer>
    </div>
);

export default App;