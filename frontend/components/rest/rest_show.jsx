import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Gallery from './gallery';
import Map from './map';
import ReviewIndexContainer from '../review/review_index_container';
import ReviewFormContainer from '../form/review_form_container';
import RestBookingContainer from '../booking/rest_booking_container';
import ReviewEditFormContainer from '../form/review_edit_form_container';
import { receiveCurrentUser } from '../../actions/session_actions';

class RestShow extends React.Component {
    constructor(props){
        super(props);

        this.state={
            reviewOut: false,
        }

        this.openReview = this.openReview.bind(this);
        this.closeReview = this.closeReview.bind(this);
    }

    componentDidMount(){
        // debugger
        window.scrollTo(0,0);
        this.props.fetchRest(this.props.match.params.restId);
    }

    openReview(){
        this.setState({reviewOut: true});
    }

    closeReview(){
        this.setState({reviewOut: false});
    }


    render(){
       if (!this.props.rest) return null;
       const { rest, currentUser } = this.props;
       const formAction = !currentUser ? (
        ()=> this.props.openModal("login")
       ) : (
           this.openReview
       )
        // debugger
        return (
            <div className="rest_index">
                <img src={rest.photos[1].url} className="rest_header"/> 
                {/* <div className="rest_header"></div> */}
                <div className="rest_body">
                    <div className="main_rest_content">
                    <div id="overview"></div>
                        <div className="rest-navbar">
                            <HashLink to={`/rests/${rest.id}#overview`} className="content-button">Overview</HashLink>
                            <HashLink to={`/rests/${rest.id}#photos`}  className="content-button">Photos</HashLink>
                            <HashLink to={`/rests/${rest.id}#menu`} className="content-button">Menu</HashLink>
                            <HashLink to={`/rests/${rest.id}#reviews`} className="content-button">Reviews</HashLink>
                        </div>
                        <div className="rest-title">
                            {rest.name}
                        </div>
                        <div className="rest-info">
                            <img src={window.starsURL}/>
                            <div>4.5</div>
                            <div className="rest-icons"><i className="far fa-comment-alt"></i><div className="text">50 reviews</div></div>
                            <div className="rest-icons"><i className="far fa-money-bill-alt"></i><div className="text">30 and under</div></div>
                            <div className="rest-icons"><i className="fas fa-utensils"></i><div className="text">{rest.cuisine}</div></div>
                        </div>
                        <div className="description">
                            {rest.description}
                        </div>
                        <div id="photos"></div>
                        <div className="subheader">
                            9 Photos
                        </div>
                        <Gallery images={rest.photos} />
                        <div id="menu"></div>
                        <div className="subheader">
                            Menu
                        </div>
                        <div className="item-cat">Popular Dish</div>
                        <div className="menu-items">
                            <div className="item-name">{rest.menu.popular}</div>
                            <div className="item-price">{rest.menu.pop_price}</div>
                        </div>
                        <div className="item-cat">Appetizer</div>
                        <div className="menu-items">
                            <div className="item-name">{rest.menu.app}</div>
                            <div className="item-price">{rest.menu.app_price}</div>
                        </div>
                        <div className="item-cat">Main</div>
                        <div className="menu-items">
                            <div className="item-name">{rest.menu.main}</div>
                            <div className="item-price">{rest.menu.m_price}</div>
                        </div>
                        <div id="reviews"></div>
                        <div className="subheader">
                            What people are saying
                        </div>
                        <div className="write-review"><button className="write-review-button" onClick={formAction}>Write a review</button></div>
                        <ReviewFormContainer reviewOut={this.state.reviewOut} closeReview={this.closeReview}/>
                        <ReviewIndexContainer />
                    </div>
                    <aside className="right-content">
                        <div className="rsvp-container">
                            <RestBookingContainer />
                        </div>
                        {/* <div className="order-takeout">
                            Takeout?
                        </div> */}
                        <div>
                        <Map rest={rest} />
                        <div className="address">{rest.address},&#160;{rest.city},&#160;{rest.state}&#160;{rest.zip}</div>
                        </div>
                        <div className="misc">
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

export default RestShow;