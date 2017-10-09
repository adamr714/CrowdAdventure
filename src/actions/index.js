import fetch from 'isomorphic-fetch';

export const createUser = (name, email, password) => dispatch => {
    const url = 'http://localhost:8080/users/register'
    return fetch(url, {
        method: "POST",
        body: {name: name, email: email, password: password}  //just pass the instance
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
        return dispatch(createUserSuccess(createUser, data.description))
    })
    .catch(error => {
        return dispatch(createUserFail(createUser, error))
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
export const createUserFail = (error) => ({
    type: CREATE_USER_FAIL,
    error: 'Could not create user'
});

