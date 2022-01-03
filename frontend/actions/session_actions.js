import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const removeSessionErrors = () => {
    return {
    type: REMOVE_SESSION_ERRORS
}};

export const receiveCurrentUser = user => {
    // debugger
    return {
    type: RECEIVE_CURRENT_USER,
    user
}};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => {
    // debugger
    return {
    type: RECEIVE_SESSION_ERRORS,
    errors
}};

export const login = user => dispatch => {
    // debugger
    return SessionUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
};

export const logout = () => dispatch => (
    SessionUtils.logout().then(() => dispatch(logoutCurrentUser()))
);



