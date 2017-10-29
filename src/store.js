import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import * as reducers from './reducers/index';

export default createStore(combineReducers({
    user: reducers.userReducer, 
    form: formReducer
}), applyMiddleware(thunk));

