import { combineReducers } from 'redux';
import { reducer as form } from "redux-form";
import data from "./data";


const rootReducer = combineReducers({
    data,
    form
});

export default rootReducer;
