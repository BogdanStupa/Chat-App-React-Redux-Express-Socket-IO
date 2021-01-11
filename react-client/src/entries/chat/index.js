import React from "react";
import { useDispatch } from "react-redux";
import {
    ActionWrapper,
    ChatWrapper
 } from "./wrappers";
 import { startChanel } from "redux/actions/socket";
import { getUser } from "modules/utils";



const ChatEntry = () => {
    const user = getUser() || {}; 

    console.log("CHAT ENTRY");

    const dispatch = useDispatch();
    dispatch(startChanel(user._id));
    
    return (
        <div className="chat-entry-wrapper"> 
            <ActionWrapper user={user}/>
            <ChatWrapper user={user}/>
        </div>
    );
}

export default ChatEntry;