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


// export const createAdventure = (projectTitle, category, phase, shortDescription, longDescription, rewards, fundingGoal) => dispatch => {
//     const url = 'adventures/create';
//     console.log(JSON.stringify({projectTitle: projectTitle, category: category, phase: phase, shortDescription: shortDescription, longDescription: longDescription, rewards: rewards, fundingGoal: fundingGoal}));
//     return fetch(url, {
//         method: "POST",
//         body: JSON.stringify({projectTitle: projectTitle, category: category, phase: phase, shortDescription: shortDescription, longDescription: longDescription, rewards: rewards, fundingGoal: fundingGoal}),  //just pass the instance
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           })
//       }).then(response => {
//         if (!response.ok) {
//             const error = new Error(response.statusText)
//             error.response = response
//             throw error;
//         }
//         return response;
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         return dispatch(createAdventureSuccess())
//     })
//     .catch(async error => {
//         let json = await error.response.json();      
//         return dispatch(createAdventureFail(json.message))
//     });
// };

export const createAdventure = (data) => async dispatch => {
    const url = 'adventures/create';

    try {
        let createNewAdventure = await http.post(url,data);
        console.log('Adventure created successfully.');
        hashHistory.push('/profile')
        return dispatch(createAdventureSuccess());
    } catch (err) {
        console.log('You failed to create this adventure. Error: ' + err);

        // return dispatch(createAdventureFail(err.response.json()));
    }
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
        if (err.response == null) {
            return dispatch(loginFail({message: 'User cannot be found'}))
        }
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

export const CREATE_ADVENTURE_SUCCESS = 'CREATE_ADVENTURE_SUCCESS';
export const createAdventureSuccess = () => ({
    type: CREATE_ADVENTURE_SUCCESS
});

export const CREATE_ADVENTURE_FAIL = 'CREATE_ADVENTURE_FAIL';
export const createAdventureFail = (error) => {
    return {
    type: CREATE_ADVENTURE_FAIL,
    error: error
}};

export const BACKED_ADVENTURE = 'BACKED_ADVENTURE';
export const backedAdventureSuccess = () => ({
    type: BACKED_ADVENTURE
});

export const BACKED_ADVENTURE_FAIL = 'BACKED_ADVENTURE_FAIL';
export const backedAdventureFail = () => ({
    type: BACKED_ADVENTURE_FAIL
});

export const DELETE_BACKED_ADVENTURE = 'DELETE_BACKED_ADVENTURE';
export const deleteBackedAdventure = () => ({
    type: DELETE_BACKED_ADVENTURE
});



