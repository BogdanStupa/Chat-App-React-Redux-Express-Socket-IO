import { combineReducers } from "redux";

import formReducer from "./form";


export default () => {
    return combineReducers({
       form: formReducer
    });
}