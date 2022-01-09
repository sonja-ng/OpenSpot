import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './gallery';

class RestShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.fetchRest(this.props.match.params.restId);
    }

    render(){
        
       if (!this.props.rest) {
           return null;
       }
       const { rest } = this.props;
        return (
            <div className="rest_index">
                <img src={rest.photos[1].url} className="rest_header"/> 
                <div className="rest_body">
                    <div className="main_rest_content">
                        <div className="rest-navbar">
                            <Link to="/" className="content-button">Overview</Link>
                            <Link to="/" className="content-button">Photos</Link>
                            <Link to="/" className="content-button">Menu</Link>
                            <Link to="/" className="content-button">Reviews</Link>
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
                        <div className="subheader">
                            9 Photos
                        </div>
                        <Gallery images={rest.photos} />
                        <div className="subheader">
                            Menu
                        </div>
                        <div className="subheader">
                            What 50 people are saying
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="rsvp-container">
                            RSVP component
                    </div>
                    <div className="order-takeout">
                            Takeout?
                    </div>
                    <div className="map">
                        Map
                    </div>
                    <div className="misc">
                        Misc
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default RestShow;