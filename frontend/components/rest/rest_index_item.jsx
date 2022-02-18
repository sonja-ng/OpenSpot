import React from 'react';
import { Link } from 'react-router-dom';

class RestIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state={
            starRating: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({ starRating: [...Array(this.props.rest.avg_rating).keys()] });
    }

   componentDidUpdate(prevProps){
       if (this.props.rest.avg_rating && prevProps.rest.avg_rating && this.props.rest.avg_rating !== prevProps.rest.avg_rating)
       this.setState({ starRating: [...Array(this.props.rest.avg_rating).keys()] })
   }

    handleClick(e){
        e.stopPropagation();
        if (this.props.currentUser) {
            this.props.fillInOneFieldBooking("rest_id", this.props.rest.id);
            this.props.fillInOneFieldBooking("user_id", this.props.currentUser.id);
            this.props.fillInOneFieldBooking("time", e.target.innerText.slice(0, 4));
        } else {
            this.props.openModal("login");
        }
    }

    renderStars(){
        let fullStars;
        let emptyStars;

        if (this.state.starRating.length === 5){
            return (this.state.starRating.map((rating, idx) => <span className="index-star" key={idx}>&#9733;</span>));
        } else {
            fullStars = this.state.starRating.map((rating, idx) => <span className="index-star" key={idx}>&#9733;</span>);
            const remainStars = [...Array(5 - this.state.starRating.length).keys()];
            emptyStars = remainStars.map((remain, idx) => <span className="index-empty-star" key={idx}>&#9733;</span>);
            return (<div>{fullStars}{emptyStars}</div>)
        }
    } 

    render(){
        const { rest } = this.props;
        if (rest.photos.length === 0) return null; 
        const image = rest.photos[0].url;
        const whereTo = this.props.currentUser ? "/booking" : "/";
        return (
            <li className="rest-index-thumbnail">
                <Link to={`rests/${rest.id}`}>
                <img src={image} className="thumbnail-img"/>
                {/* <div className="thumbnail-img"></div> */}
                <div className="thumbnail-text">
                    <h1>{rest.name}</h1>
                    <div className="stars">{ this.renderStars()}</div>
                    <div className="thumbnail-detail">
                        <span>{rest.cuisine}</span>
                        <div className="price">$$$</div>
                        <span>{rest.neighborhood}</span>
                    </div>
                </div>
                </Link>
                <div className="button-row">
                <Link to={whereTo} onClick={this.handleClick}><button className="thumbnail-button">7:15pm</button></Link>
                <Link to={whereTo} onClick={this.handleClick}><button className="thumbnail-button">7:30pm</button></Link>
                <Link to={whereTo} onClick={this.handleClick}><button className="thumbnail-button">7:45pm</button></Link>
                </div>
            </li>      
        )
    }
};
 
export default RestIndexItem;