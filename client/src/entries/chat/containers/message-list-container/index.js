import React, { useEffect, createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import classNames from "classnames";
import { toConversationDate } from "modules/utils";
import { MessageComponent } from "entries/chat/components";
import { 
    setUnreadMessagesInConversationsRequest,
    setIsScrollingRequest
 } from "redux/actions/conversation";


const currentConversationMessagesSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation  => {
        return { 
            conversationMessages: currentConversation.conversationMessages,
            unreadMessages: currentConversation.unreadMessages,
            conversationId: currentConversation.conversationId
        }        
    }
);
// conversationMessages: [
//     {
//       message: string,
//       _id: string,
//       senderId: string,
//       receivedId: string,
//       dateTime: date
//     },
// ]
const isScrollingSelector = createSelector(
    [
        state => state.conversations.currentConversation
    ],
    currentConversation  => currentConversation.isScrolling
);


const MessageListContainer = props => {
    const { userId } = props;

    const { 
        conversationMessages = [], 
        unreadMessages = 0, 
        conversationId
    } = useSelector(state => currentConversationMessagesSelector(state));
    const isScrolling = useSelector(state => isScrollingSelector(state));

    const [getElement, setGetElement] = useState(null);
    const [refs, setRefs] = useState([]);

    const messagesLength = conversationMessages.length;
    const lastUnreadMessage = messagesLength - unreadMessages;
    let unreadMessagesCount = unreadMessages;

    console.log("MESSAGE LIST CONTAINER");

    const dispatch = useDispatch();
    useEffect(() => {
        setRefs(Array(messagesLength).fill().map(() => createRef()));
        
        const DOMcontainer =  document.getElementById("messageListContainer");
        setGetElement(() => DOMcontainer);
        if(!unreadMessages){
            DOMcontainer.scrollTo(0,DOMcontainer.scrollHeight);
        }

        return () => {
            //dispatch chenges on server
        }

    },[conversationMessages]);


    const toScroll = ref => {
        ref.current.scrollIntoView();
        dispatch(setIsScrollingRequest());
    }
    
    const handleVisibleMessage = () => {
        --unreadMessagesCount;
        dispatch(setUnreadMessagesInConversationsRequest({ conversationId, unreadMessages: unreadMessagesCount }));
    }

    const styles = classNames({
        "message-list-container":true,
        "scrolling": isScrolling 
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
                            containmentDOMRect={getElement}
                        />
                    })
                }
        </div>
    );
} 

export default MessageListContainer;