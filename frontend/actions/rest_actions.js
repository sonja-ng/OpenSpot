import * as RestUtils from '../util/rest_api_utils';

export const RECEIVE_RESTS = 'RECEIVE_RESTS';
export const RECEIVE_REST = 'RECEIVE_REST';
export const RECEIVE_REST_ERRORS = 'RECEIVE_REST_ERRORS';

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

const receiveRestErrors = errors => ({
    type: RECEIVE_REST_ERRORS,
    errors
});

export const fetchRests = () => dispatch => (
    RestUtils.fetchRests().then(rests => dispatch(receiveRests(rests)), errors => dispatch(receiveRestErrors(errors)))
);

export const fetchRest = restId => dispatch => (
    RestUtils.fetchRest(restId).then(rest => dispatch(receiveRest(rest)), errors => dispatch(receiveRestErrors(errors)))
);

