import fetch from 'isomorphic-fetch';
import { hashHistory } from 'react-router';

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

export const userLogin = (email, password) => dispatch => {
    const url = 'users/login';;
    // let email = 'email';
    // let password = 'passwprd';
    console.log(JSON.stringify({email: email, password: password}));
    return fetch(url, {
       method: "POST",
       body: JSON.stringify({email: email, password: password}),
       headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Basic ' + btoa(email + ":" + password)
      }) 
    })
    .then(response => {
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
        return dispatch(loginSuccess())
    })
    .catch(async error => {
        let json = await error.response.json();      
        return dispatch(loginFail(json.message))
    });
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



