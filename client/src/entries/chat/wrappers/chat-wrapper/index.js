import React from "react";
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




const ChatWrapper = () => {
    
    const handleSendMessage = () => {

    }

    return (
        <div className="chat-wrapper">
            <div className="chat-container">
                <header className="chat-header">
                    <UserInfoComponent
                        profile={{
                            label: "nickname",
                            backgroundColor: "#ccc",
                            width: "2.2rem",
                            height: "2.2rem",
                            fontSize: 20
                        }}
                        title={{
                            nickname: "nickname",
                            color: "#F5F5DC"
                        }}
                        isFetching={false}
                        rowMode
                    />
                </header>
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
            </div>
        </div>
    )
}

export default ChatWrapper;