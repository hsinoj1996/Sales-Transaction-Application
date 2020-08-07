import {combineReducers}  from 'redux';
import customerAdd from './postReducer';
import productAdd from "./prodReducer"

export default combineReducers({
    posts: customerAdd,
    prods: productAdd
})