import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { toConversationDate } from "modules/utils";
import { MessageComponent } from "entries/chat/components";



const currentConversationMessagesSelector = createSelector(
    [
        state => state.conversations.currentConversation.conversationMessages
    ],
    conversationMessages  => conversationMessages
);
// messages: [
//     {
//       message: string,
//       _id: string,
//       senderId: string,
//       receivedId: string,
//       dateTime: date
//     },
// ]

const MessageListContainer = props => {
    const { userId } = props;
    const messages = useSelector(state => currentConversationMessagesSelector(state));

    return (
        <div className="message-list-container">
                {
                    messages.map((item, index) =>     
                        <MessageComponent 
                            key={item._id}
                            message={item.message}
                            sender={userId === item.senderId}
                            date={toConversationDate(item.dateTime)}
                        />
                    )
                }
        </div>
    );
} 

export default MessageListContainer;