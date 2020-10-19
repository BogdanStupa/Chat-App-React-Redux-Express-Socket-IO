import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { ConversationItemCart } from "entries/chat/components";

const currentConversationActiveConversationSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation => currentConversation.isActive ? currentConversation.conversationId : null
);

const ConversationList = props => {
    const {
        items,
        isFetching,
        onClickItem,
        onDeleteItem
    } = props;
    /*
    *   items: [
    *       {
    *           unreadMesages: int,
    *           messages: array [],
    *           _id: string,
    *           partner: {
    *               partnerId: string,
    *               nickname: string,
    *               profileColor: string,
    *               lastMessage: {
    *                   dataTime: data,
    *                   message: string,
    *                   _id: string
    *               }
    *           }
    *       }
    *   ]
    */
   const activeConversationId = useSelector(state => currentConversationActiveConversationSelector(state));

    return (
        <div className="chat-lists">
            {
                !isFetching 
                ? 
                    items.map(item => 
                        <ConversationItemCart
                                key={item._id}
                                id={item._id}
                                unreadMessages={item.unreadMessages}
                                profile={{
                                    label: item.partner.nickname,
                                    backgroundColor: item.partner.profileColor,
                                    width: 45,
                                    height: 45,
                                    fontSize: 24
                                }}
                                message={{
                                    messageText: item.partner.lastMessage ? item.partner.lastMessage.message : "no messages yet...",
                                    dateTime: item.partner.lastMessage ? item.partner.lastMessage.dateTime : null
                                }} 
                                unreadMessages={item.unreadMessages}
                                nickname={item.partner.nickname}
                                onClickItem={onClickItem}
                                isActive={item._id === activeConversationId ? true : false}
                        /> 
                    )
                
                : <span>isFetching</span>
            }
        </div>
    )
}

export default ConversationList;