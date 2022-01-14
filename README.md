# Open Spot

Open Spot is an Open Table clone where users can search, make reservations, and write reviews for dining spots across New York City.

[Live Demo](http://openspot-aa.herokuapp.com/)

## Homepage
![Homepage](./app/assets/images/screenshot1.png)

## Restaurant Profile
![Restaurant Profile](./app/assets/images/restaurant.png)

## User Reviews 
![User Reviews](./app/assets/images/reviews.png)

## Autocomplete Search Function 
![Search Bar](./app/assets/images/search.png)



## Technology
- React/Redux
- Javascript
- Ruby on Rails
- AWS S3
- Google Map API
- PostgreSQL

## Implementation
- 
```js
//game.js

   isCorrect() { 
    const currentArtwork = this.artwork[0];
    if (currentArtwork.status === -1) {
      if (this.currentKey === currentArtwork.keys[0]) {
        currentArtwork.updateStatus();
        return true;
      } else if (this.currentKey !== currentArtwork.keys[0] && this.wrapper.includes(this.currentKey)) {
         return false;
      }
    } else if (currentArtwork.status === 0) {
      if (this.currentKey === currentArtwork.keys[1]) {
        currentArtwork.updateStatus();
        return true;
      } else if (this.currentKey !== currentArtwork.keys[1] && this.wrapper.includes(this.currentKey)) {
         return false;
      }
    }
}
```

## MVP

### Splash/User Authentication
- Everyone can view the landing page and restaurant pages, but only logged-in users can make reservations and write/edit/delete reviews.
- Users can sign up, update their account info, log in, and log out of their accounts.
- Users have the option to log in with a demo account to access all site functionalities.

### Search Function
- The site comes with a search bar with autocomplete suggestions for cuisine, neighborhood, and restaurant name.

### Reservation
- Logged in users can choose available time slots and make bookings from the homepage, on the restaurant profile, as well as from the popup search bar.
- Confirmed bookings are viewable in the user profile. Users have the option to edit or cancel their reservations.

### Review
- Reviews of a restaurant are viewable by the public
- Logged-in users can write a review
- Users can view, edit, and delete their own reviews in their profile


## Future Features
- Allow users to bookmark favorite restaurants 
- Add carousel features to restaurant list on homepage
- Show upcoming and past bookings as a dropdown alert in the navbar
- Add filter functionality to search results