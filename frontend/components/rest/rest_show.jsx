import React from 'react';
import { Link } from 'react-router-dom';

class RestShow extends React.Component {
    constructor(props){
        super(props)
    
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
                        {rest.name}
                        <div className="subheader">
                            20 Photos
                        </div>
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