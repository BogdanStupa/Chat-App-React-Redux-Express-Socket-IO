import React, {useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
    InputFormComponent
} from "shared/components";


const conversationPartnerIdSelector = createSelector(
    [
        state => state.conversations.currentConversation.partnerId
    ],
    partnerId => partnerId
);

const InputTextMessage = props => {
    const {
        token,
        keyDown
    } = props;

    const partnerId = useSelector(state => conversationPartnerIdSelector(state));
    const [message, setMessage] = useState("");

    const onKeyDown = () => {
        keyDown(partnerId, message, token);
        setMessage("");
    }

    const handleChangeValue = event => setMessage(event.target.value);

    return <InputFormComponent 
                {...props} 
                keyDown={onKeyDown} 
                onChange={handleChangeValue} 
                value={message}
            />
}

export default InputTextMessage;