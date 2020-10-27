import React from "react";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import {
    UserInfoComponent
} from "entries/chat/components";
import {
    MessageListContainer,
    InputTextMessage
} from "entries/chat/containers";

import {
    getUser,
    getToken
} from "modules/utils";
import constants from "modules/constants";
import {
    postMessageRequest
} from "redux/actions/message";


const currentConversationIsActiveSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation => currentConversation.isActive
);

const currentConversationIsFetchingSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation => currentConversation.isFetching
);

const currentConversationProfileInfoSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation => {
        return {
            partnerNickname: currentConversation.partnerNickname,
            partnerProfileColor: currentConversation.partnerProfileColor

        }
    }
);


const ChatWrapper = () => {
    const { _id } = getUser() || {};
    const { token } = getToken() || {};

    const isActive = useSelector(state => currentConversationIsActiveSelector(state));
    const isFetching = useSelector(state => currentConversationIsFetchingSelector(state));
    const partnerProfileInfo = useSelector(state => currentConversationProfileInfoSelector(state));

    const dispatch = useDispatch();

    const handleSendMessage = (partnerId, message, token) => {
        if(message){
            dispatch(postMessageRequest({ partnerId, message, token }));
        }    
    }

    return (
        <div className="chat-wrapper">
            {   
                isActive 
                ? (<div className="chat-container">
                    <header className="chat-header">
                        <UserInfoComponent
                            profile={{
                                label: partnerProfileInfo.partnerNickname,
                                backgroundColor: partnerProfileInfo.partnerProfileColor,
                                width: "2.2rem",
                                height: "2.2rem",
                                fontSize: 20
                            }}
                            title={{
                                nickname: partnerProfileInfo.partnerNickname,
                                color: "#F5F5DC"
                            }}
                            isFetching={false}
                            rowMode
                        />
                    </header>
                    {
                        !isFetching 
                        ? (
                            <>
                                <section className="chat-conversation">
                                    <MessageListContainer
                                        userId={_id}
                                        unreadMessages
                                    />

                                </section>
                                <footer className="chat-footer">
                                    <InputTextMessage
                                        multiline
                                        fontSize={16}
                                        height="96%"
                                        placeholder={constants.LABELS.CHAT.WRITE_MESSAGE_TEXT}
                                        keyDown={handleSendMessage}
                                        sendMessage
                                        token={token}
                                    />
                                </footer>
                            </>
                        )
                        :(<div className="chat-conversation-base center-elem">
                            <div className="chat-conversation-info-message">loading..</div>
                        </div>)
                    }
                </div>)
                : <div className="chat-conversation-base center-elem">
                    <div className="chat-conversation-info-message">Please, select a chat to start messaging...</div>
                </div>
            }   
        </div>
    )
}

export default ChatWrapper;