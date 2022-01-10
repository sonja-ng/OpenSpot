import { RECEIVE_REST, RECEIVE_RESTS } from "../actions/rest_actions";

const restsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_RESTS:
            return action.rests;
        case RECEIVE_REST:
            // debugger
            const limitRest = {
                address: action.rest.address,
                city: action.rest.city,
                cuisine: action.rest.cuisine,
                description: action.rest.description,
                id: action.rest.id,
                lat: action.rest.lat,
                lng: action.rest.lng,
                menu: action.rest.menu,
                name: action.rest.name,
                neighborhood: action.rest.neighborhood,
                owner_id: action.rest.owner_id,
                photos: action.rest.photos,
                reviewIds: action.rest.reviewIds,
                state: action.rest.state,
                zip: action.rest.zip,
            };
            const newRest = {[action.rest.id]: limitRest};
            return Object.assign({}, oldState, newRest);
        default:
            return oldState;
    }
}

export default restsReducer;