import * as actions from '../actions/index';
// import store from '../store'

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
   
    if (action.type === actions.CREATE_ADVENTURE_SUCCESS) {
        return adventureCreated(action, state);
    }  
    
    if (action.type === actions.CREATE_ADVENTURE_FAIL) {
        return adventureCreationFailed(action, state);
    }
    
    if (action.type === actions.BACKED_ADVENTURE) {
        return backedAdventure(action, state);
    }
    
    if (action.type === actions.DELETE_BACKED_ADVENTURE) {
        return deleteBackedAdventure(action, state);
    }

    if (action.type === actions.BACKED_ADVENTURE_FAIL) {
        return backedAdventureFailed(action, state);
    }

    return state;
};

function backedAdventureFailed(action, state) {
    let backedFail = Object.assign({}, state, {backedFailureMessage: "You must be logged in to back an adventure"});
    console.log("Log in to back an adventure");
    return backedFail;
}

function deleteBackedAdventure(action, state) {
    let deletedAdventure = Object.assign({}, state, {backedSuccessMessage: "You are no longer an Adventurer on this project :-("});
    console.log("You are no longer an adventurer");
    return deletedAdventure;
}

function backedAdventure(action, state) {
    let backed = Object.assign({}, state, {backedSuccessMessage: "You are now an Adventurer!"});
    console.log("You are now an Adventurer");
    return backed;
}

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

function adventureCreated(action, state) {
    let adventureCreationSuccessful = Object.assign({}, state, {creationSuccessMessage: "Your Adventure has been created, tell your friends!"});
    console.log("Adventure Created");
    return adventureCreationSuccessful;
}

function adventureCreationFailed(action, state) {
    let adventureFailed = Object.assign({}, state, {creationFailedMessage: action.error});
    console.log("Adventure Creation Failed");
    return adventureFailed;
}

export default userReducer;