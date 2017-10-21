import * as actions from '../actions/index';
import store from '../store'

const initialState = {
    LoggedIn: false
};

export const reducer = (state=initialState, action) => {
    if (action.type === actions.CREATE_USER_SUCCESS) {
        return userCreated(action, state);
    }  

    if (action.type === actions.CREATE_USER_FAIL) {
  
        return userCreationFailed(action, state);
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



// Send them to log in page
// Display a success message 
// Reset the form
