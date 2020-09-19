import { combineReducers } from "redux";

import  authReducer  from "./auth";


export default () => {
    return combineReducers({
       auth: authReducer
    });
}