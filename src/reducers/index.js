import * as actions from '../actions/index';
import store from '../store'

const initialState = {
    loggedIn: false
};

export const userReducer = (state=initialState, action) => {
    if (action.type === actions.CREATE_USER_SUCCESS) {
        return userCreated(action, state);
    }  

    if (action.type === actions.CREATE_USER_FAIL) {
  
        return userCreationFailed(action, state);
    }

    if (action.type === actions.LOGIN_SUCCESS) {
              return userLoggedIn(action, state);
    }

   if (action.type === actions.LOGOUT_SUCCESS) {
        return userLoggedOut(action, state);
    } 
         
    return state;
};

function userCreated(action, state) {
    let neville = Object.assign({}, state, {creationSuccessMessage: "You are now signed up, please log in."});
    console.log("You are now signed up");
    return neville;
}

function userCreationFailed(action, state) {
    let adam = Object.assign({}, state, {creationFailedMessage: action.error});
    console.log("User Creation Failed");
    return adam;
}

function userLoggedIn(action, state) {
    let loggedIn = Object.assign({}, state, {loggedIn: true, loggedInMessage: "You are now logged in"});
    console.log("User Logged In");
    return loggedIn;
}

function userLoggedOut(action, state) {
    let loggedOut = Object.assign({}, state, {loggedIn: false, loggedInMessage: "You are now logged out"});
    console.log("User Logged Out");
    return loggedOut;
}


