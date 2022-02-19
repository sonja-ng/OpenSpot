import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchFavorites, removeFavorite, addFavorite } from './actions/favorite_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
    const preloadedState = {
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchFavorites = fetchFavorites;
    window.addFavorite = addFavorite;
    window.removeFavorite = removeFavorite;

    

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root)
});

