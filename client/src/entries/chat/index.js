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
    const dispatch = useDispatch();
    dispatch(startChanel(user._id));
    console.log("CHAT ENTRY");
    return (
        <div className="chat-entry-wrapper"> 
            <ActionWrapper/>
            <ChatWrapper/>
        </div>
    );
}

export default ChatEntry;