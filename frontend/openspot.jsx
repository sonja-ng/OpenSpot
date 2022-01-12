import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createBooking, 
    updateBooking, 
    deleteBooking, 
    fetchBooking, 
    fetchBookings } from './actions/booking_actions';

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
    window.createBooking = createBooking;
    window.updateBooking = updateBooking;
    window.deleteBooking = deleteBooking;
    window.fetchBooking = fetchBooking;
    window.fetchBookings = fetchBookings;
    

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root)
});

