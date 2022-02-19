import React from 'react';
import FavIndexItem from './fav_index_item';

class UserFavIndex extends React.Component {
    componentDidMount(){
        this.props.fetchFavorites({["userId"]: this.props.currentUser.id});
    }

    render(){ 
        const { favorites, removeFavorite } = this.props; 
        if (!favorites) return null;
    
        const favList = favorites.length > 0 ? (
            favorites.map((favorite, idx) => <FavIndexItem key={idx} favorite={favorite} removeFavorite={removeFavorite} />)
        )
        : (
            <div className="no-content"><h3>You have no saved restaurants</h3></div>
        )
      
        return (
            <div className="review-bg">
                <ul>
                    <div className="my-reviews"><h3>My Saved Restaurants</h3></div>
                    {favList}
                </ul>
            </div>
        )
    }

}

export default UserFavIndex;