import React from "react";
import { useSelector } from "react-redux";
import { 
    conversationItemSelector,
    currentConversationItemSelector
 } from "selectors";
import ConversationItemCart from "./conversation-item-cart-component";


const ConversationItemCartContainer = props => {
    const {
        onClickItem,
        id,
        token
    } = props;
    const activeConversationId = useSelector(state => currentConversationItemSelector(state,"conversationId"));
    const unreadMessages = useSelector(state => currentConversationItemSelector(state, "unreadMessages"));
    const item = useSelector(state => conversationItemSelector(state, id));

    return (
        <ConversationItemCart
            id={id}
            unreadMessages={unreadMessages}
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
            partnerId={item.partner.partnerId}
            unreadMessages={item.unreadMessages}
            nickname={item.partner.nickname}
            onClickItem={onClickItem}
            isActive={item._id === activeConversationId ? true : false}
            token={token}
        /> 
    );
}   

export default ConversationItemCartContainer;