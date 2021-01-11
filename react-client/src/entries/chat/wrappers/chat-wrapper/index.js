import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    UserInfoComponent
} from "entries/chat/components";
import {
    MessageListContainer,
    InputTextMessage
} from "entries/chat/containers";
import constants from "modules/constants";
import {
    postMessageRequest
} from "redux/actions/message";
import {
    closeActiveCurrentConversation
} from "redux/actions/conversation";
import { 
    currentConversationProfileInfoSelector
 } from "./selector";
 import {
    isFetchingOfConversationsSelector,
    currentConversationItemSelector
 } from "selectors";



const ChatWrapper = ({ user }) => {
    const { _id } = user || {};

    const isActive = useSelector(state => currentConversationItemSelector(state, "isActive"));
    const isFetching = useSelector(state => isFetchingOfConversationsSelector(state));
    const partnerProfileInfo = useSelector(state => currentConversationProfileInfoSelector(state));

    const dispatch = useDispatch();

    const escapeHandler = event => {
        if(event.code === "Escape"){
            dispatch(closeActiveCurrentConversation());
        }
    }

    useEffect(() => {
        window.addEventListener("keydown",escapeHandler);
        return () => {
            window.removeEventListener("keydown", escapeHandler);
        }
    },[]);

    const handleSendMessage = (partnerId, message, conversationId) => {
        if(message){
            dispatch(postMessageRequest({ partnerId, message, conversationId }));
        }    
    }

    console.log("CHAT WRAPPER");
    return (
        <div 
            className="chat-wrapper"
        >
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
                                        autoFocus
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