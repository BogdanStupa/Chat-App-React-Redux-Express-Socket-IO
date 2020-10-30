import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
    InputFormComponent
} from "shared/components";
import {
    currentConversationItemSelector,
    isSendingMessageSelector
} from "selectors";


const InputTextMessage = props => {
    const {
        token,
        keyDown
    } = props;

    const partnerId = useSelector(state => currentConversationItemSelector(state, "partnerId"));
    const conversationId = useSelector(state => currentConversationItemSelector(state, "conversationId"));
    const isFetchingMessage = useSelector(state => isSendingMessageSelector(state));   
    const [message, setMessage] = useState("");

    const onKeyDown = () => {
        keyDown(partnerId, message, token, conversationId);
        setMessage("");
    }

    const handleChangeValue = event => setMessage(event.target.value);

    return <InputFormComponent 
                {...props} 
                keyDown={onKeyDown} 
                onChange={handleChangeValue} 
                value={message}
                isFetching={isFetchingMessage}
                autoFocus
            />
}

export default InputTextMessage;