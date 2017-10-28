import fetch from 'isomorphic-fetch';
import { hashHistory } from 'react-router';
import http from '../services/http';

export const createUser = (name, email, password) => dispatch => {
    const url = 'users/register';
    console.log(JSON.stringify({name: name, email: email, password: password}));
    return fetch(url, {
        method: "POST",
        body: JSON.stringify({name: name, email: email, password: password}),  //just pass the instance
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          })
      }).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        hashHistory.push('/login')
        return dispatch(createUserSuccess())
    })
    .catch(async error => {
        let json = await error.response.json();      
        return dispatch(createUserFail(json.message))
    });
};

export const userLogin = (email, password) => async dispatch => {
    const url = 'users/login';

    http.setCredentials(email, password);
    try {
        let loginResponse = await http.post(url);
        hashHistory.push('/')
        console.log('Logged in successfully.');
        return dispatch(loginSuccess());
    } catch (err) {
        console.log('Login failed miserably. Error: ' + err);
        return dispatch(loginFail(err.response.json()));
    }
};

export const USER_LOGIN = 'USER_LOGIN';
export const loginUser = (email, password) => ({
    type: USER_LOGIN,
    loginUser: {email, password}
});

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS
});

export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
export const createUserFail = (error) => {
    return {
    type: CREATE_USER_FAIL,
    error: error
}};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = (error) => {
    return {
    type: LOGIN_FAIL,
    error: error
}};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});


