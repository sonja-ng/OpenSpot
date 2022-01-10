import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { updateUser } from './actions/user_actions';
import { fetchRests, fetchRest } from './actions/rest_actions';
import { fetchRestsTest } from './util/rest_api_utils';
import { fetchReviews, deleteReview } from './actions/review_actions';
// import { updateFilter, changeFilter } from './actions/search_actions';

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
    window.updateUser = updateUser;
    window.fetchRests = fetchRests;
    window.fetchRest = fetchRest;
    // window.updateFilter = updateFilter;
    // window.changeFilter = changeFilter;
    window.fetchReviews = fetchReviews;
    // window.createReview = createReview;
    window.fetchRestsTest = fetchRestsTest;
    window.deleteReview = deleteReview;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root)
});

