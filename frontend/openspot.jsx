import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { updateUser } from './actions/user_actions';
import { fetchRests, fetchRest } from './actions/rest_actions';

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
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root)
});

