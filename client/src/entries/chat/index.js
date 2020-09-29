import React from "react";
import {
    ActionWrapper,
    ChatWrapper
 } from "./wrappers";

const ChatEntry = () => {
    //socket start chanel 
    return (
        <div className="chat-entry-wrapper"> 
            <ActionWrapper/>
            <ChatWrapper/>
        </div>
    );
}

export default ChatEntry;