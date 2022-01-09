import * as RestUtils from '../util/rest_api_utils';

export const RECEIVE_RESTS = 'RECEIVE_RESTS';
export const RECEIVE_REST = 'RECEIVE_REST';

const receiveRests = rests => {
    // debugger
    return {
    type: RECEIVE_RESTS,
    rests
}};

const receiveRest = rest => ({
    type: RECEIVE_REST,
    rest
});

export const fetchRests = (data) => dispatch => {
    // debugger
    return RestUtils.fetchRests(data).then(rests => dispatch(receiveRests(rests)))
};

export const fetchRest = restId => dispatch => (
    RestUtils.fetchRest(restId).then(rest => dispatch(receiveRest(rest)))
);