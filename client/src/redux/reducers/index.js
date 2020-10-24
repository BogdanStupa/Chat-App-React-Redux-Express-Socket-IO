import { combineReducers } from "redux";
import  authReducer  from "./auth";
import drawerReducer from "./drawer";
import contactsReducer from "./contact";
import conversationsReducer from "./conversation";
import messageReducer from "./message";

export default () => {
    return combineReducers({
       auth: authReducer,
       drawer: drawerReducer,
       contacts: contactsReducer,
       conversations: conversationsReducer,
       message: messageReducer
    });
}