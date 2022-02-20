# OpenSpot | [LIVE](http://openspot-aa.herokuapp.com/)

OpenSpot is a full-stack OpenTable clone where users can search, make reservations, and write reviews for dining spots across New York City.

![alt text](./app/assets/images/openspot_intro.gif)

## Technologies
- React
- Redux
- JavaScript
- Ruby on Rails
- AWS S3
- Google Map API
- PostgreSQL
- Webpack

## Features

### User Authentication
- User authentication is implemented on both frontend and backend. Presence validations and uniqueness contraints (for username and email) are enforced in models and database. Upon a successful signup, the password is hashed using BCrypt and saved to the database as a password digest.
- Users will be able to stay logged in after leaving the page.
- Users can sign up, update their account info, log in, and log out of their accounts.
- Error messages are displayed next to the respective fields as part of frontend error-handling.

![alt text](./app/assets/images/signup.png)

## Autocomplete Search Function
- OpenSpot comes with a modular search bar component with autocomplete suggestions on the main page, as a popup, and on the search index page. 
- Searches are sent to the backend and processed through Active Record queries. 

![Search Bar](./app/assets/images/auto2.gif)

## Reviews CRUD
- A restaurant review is viewable by the public but can only be edited and deleted by its author.
- Frontend and backend user authentication are utilized to cater to a more customized experience for logged-in users, who can view, edit, and delete their own reviews in their profile and on the restaurant's page.

![User Reviews](./app/assets/images/review.png)

## Reservation CRUD
- Logged-in users can choose available time slots and make bookings directly from the homepage and on the restaurant profile.
- Confirmed bookings are viewable in the user profile, with options to edit or cancel.

![alt text](./app/assets/images/booking.gif)

## Bookmark a Restaurant
- Logged-in users can bookmark any restaurants they like, with the information saved to the database and available next time they log in.

![alt text](./app/assets/images/fav2.gif)

## Implementation
- As the user navigates the site, the tentative reservation redux state continously updates its info like date, time, restaurant, based on which buttons the user clicks. 

```js
//rest_index_item.jsx

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

    render(){
        const { rest } = this.props;

        if (rest.photos.length === 0) return null; 
        const image = rest.photos[0].url;
        const whereTo = this.props.currentUser ? "/booking" : "/";
        return (
            <li className="rest-index-thumbnail">
                <Link to={`rests/${rest.id}`}>
                <img src={image} className="thumbnail-img"/>
                <div className="thumbnail-text">
                    <h1>{rest.name}</h1>
                    <div className="stars"><img src={window.starsURL}/></div>
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
```


## Future Features
- Add carousel features to restaurant list on homepage
- Show upcoming and past bookings as a dropdown alert in the navbar
- Add filter functionality to search results

## Image Credits

- All images belong to the respective restaurants unless otherwise specified.
- Al Badawi header (Adam Friedlander, Eater NY)
- Aldama header (Adam Friedlander, Eater NY)
- Angel Indian Restaurant header (James Park, Eater NY)
- Anything At All header and homepage search banner (Steve Freihon, Graduate Hotel)
- As You Are header (Alex Staniloff, Eater NY)
- Bar Blondeau header (Liz Clayman)
- Boulud Sud header (Evan Sung, Dinex Group)
- Cadence header (Eric Medsker, Cadence)
- CheLi header (An Rong Xu, New Yorker)
- Dhamaka header (Adam Friedlander, Eater NY)
- Pecking House header (David A Lee)
- Soothr search thumbnail (Timeout)
