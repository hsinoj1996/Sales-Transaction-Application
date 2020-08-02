import {combineReducers}  from 'redux';
import customerAdd from './postReducer';

export default combineReducers({
    posts: customerAdd
})