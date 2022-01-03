import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { signup, updateUser } from './actions/user_actions';

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
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root)
});

