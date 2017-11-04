import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

// import * as reducers from './reducers/index';
import userReducer from './reducers/index';

export default createStore(combineReducers({
    user: userReducer, 
    form: formReducer
}), applyMiddleware(thunk));


