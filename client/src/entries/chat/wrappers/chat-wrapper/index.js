import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import {
    UserInfoComponent
} from "entries/chat/components";
import {
    MessageListContainer
} from "entries/chat/containers";
import {
    InputFormComponent
} from "shared/components";
import constants from "modules/constants";



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
    
    const isActive = useSelector(state => currentConversationIsActiveSelector(state));
    const isFetching = useSelector(state => currentConversationIsFetchingSelector(state));
    const partnerProfileInfo = useSelector(state => currentConversationProfileInfoSelector(state));

    const handleSendMessage = () => {

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
                                    <MessageListContainer/>

                                </section>
                                <footer className="chat-footer">
                                    <InputFormComponent
                                        multiline
                                        fontSize={16}
                                        height="96%"
                                        placeholder={constants.LABELS.CHAT.WRITE_MESSAGE_TEXT}
                                        keyDown={handleSendMessage}
                                        sendMessage
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