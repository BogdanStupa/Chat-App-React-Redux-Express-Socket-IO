import { combineReducers } from "redux";
import  authReducer  from "./auth";
import drawerReducer from "./drawer";
import contactReducer from "./contact";
import conversationsReducer from "./conversation";
import messageReducer from "./message";
import socketReducer from "./socket";

export default () => {
    return combineReducers({
       auth: authReducer,
       drawer: drawerReducer,
       contact: contactReducer,
       conversations: conversationsReducer,
       message: messageReducer,
       socket: socketReducer
    });
}