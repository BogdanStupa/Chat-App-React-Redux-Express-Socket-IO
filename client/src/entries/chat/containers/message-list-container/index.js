import React, { useEffect, createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { toConversationDate } from "modules/utils";
import { MessageComponent } from "entries/chat/components";
import { 
    setUnreadMessagesInCurrentConversationRequest,
    sendUpdateCurrentConversationRequest
 } from "redux/actions/conversation";
import {
    currentConversationItemSelector
} from "selectors";




const MessageListContainer = props => {
    const { 
        userId,
        token
     } = props;

    const conversationId = useSelector(state => currentConversationItemSelector(state, "conversationId"));
    const partnerId = useSelector(state => currentConversationItemSelector(state, "partnerId"));
    const conversationMessages = useSelector(state => currentConversationItemSelector(state, "conversationMessages")) || [];
    // conversationMessages: [
    //     {
    //       message: string,
    //       _id: string,
    //       senderId: string,
    //       receivedId: string,
    //       dateTime: date
    //     },
    // ]
    const unreadMessages = useSelector(state => currentConversationItemSelector(state, "unreadMessages"));

    const messagesLength = conversationMessages.length;
    const lastUnreadMessage = messagesLength - unreadMessages;
    const refs = Array(messagesLength).fill().map(() => createRef());
    let unreadMessagesCount = unreadMessages;
    let DOMcontainer;
    
    const dispatch = useDispatch();
    useEffect(() => {
        DOMcontainer =  document.getElementById("messageListContainer");
        !unreadMessages && DOMcontainer.scrollTo(0,DOMcontainer.scrollHeight);
    },[messagesLength]);


    const toScroll = ref => ref.current.scrollIntoView();

    const handleVisibleMessage = () => {
        --unreadMessagesCount;
        dispatch(setUnreadMessagesInCurrentConversationRequest({ conversationId, unreadMessages: unreadMessagesCount }));
        dispatch(sendUpdateCurrentConversationRequest({
            partnerId, 
            unreadMessages: unreadMessagesCount,
            token
        }));
    }

    const styles = classNames({
        "message-list-container":true
    });


    return (
        <div id="messageListContainer" className={styles}>
                {
                    conversationMessages.map((item, i) =>  {   
                        return <MessageComponent 
                            key={item._id}
                            message={item.message}
                            sender={userId === item.senderId}
                            date={toConversationDate(item.dateTime)}
                            ref={refs[i]}
                            toThisScrolling={i === lastUnreadMessage ? toScroll : null }
                            isUnreadMessage={i >= lastUnreadMessage}
                            handleVisibleMessage={handleVisibleMessage}
                            containmentDOMRect={DOMcontainer}
                            id={i}
                        />
                    })
                }
        </div>
    );
} 

export default MessageListContainer;