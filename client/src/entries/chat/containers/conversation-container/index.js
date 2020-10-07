import React from "react";
import {
    MessageComponent
} from "entries/chat/components";



const MessageListContainer = props => {
    const {
        isFetching,
        items
    } = props;

    return (
        <MessageComponent/>
    )
} 

export default MessageListContainer;