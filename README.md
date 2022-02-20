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
- In the below code for the bookmark button, depending on the user's logged-in status, the button will either bookmark the restaurant and save it to database, or show a login pop-up. The button will also toggle between adding and deleting the bookmark based on whether the restaurant is already in the user's Redux's 'favorites' slice of state.

```js
//rest_show.jsx
       const { currentUser, openModal, favorites, removeFavorite, addFavorite } = this.props;

        const favRestKey = {};
        favorites.map(favorite => favRestKey[favorite.rest_id]= favorite.id);
        
        const favoriteRestList = Object.keys(favRestKey);
        const favoriteAction = !currentUser ? (
            ()=> openModal("login")
        ) : (
            ()=> addFavorite({user_id: this.props.currentUser.id, rest_id: this.props.match.params.restId})
        )
        
        const favoriteButton = favoriteRestList.includes(this.props.match.params.restId) ?
         (
            <button onClick={()=> removeFavorite(favRestKey[this.props.match.params.restId])} className="del-fav">
            <i className="fas fa-bookmark"></i>Restaurant Saved!</button>
         ) : (
            <button onClick={favoriteAction} className="add-fav"><i className="fas fa-bookmark"></i>Save this restaurant</button>  
         )
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
