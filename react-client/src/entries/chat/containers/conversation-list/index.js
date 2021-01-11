import React from "react";
import { useSelector } from "react-redux";
import { ConversationItemCartContainer } from "entries/chat/components";
import { 
    isFetchingOfConversationsSelector,
    idConversationsSelector 
} from "selectors";



const ConversationList = props => {
    const {
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
    const isFetching = useSelector(state => isFetchingOfConversationsSelector(state));
    const items = useSelector(state => idConversationsSelector(state));
    return (
        <div className="chat-lists">
            {
                !isFetching 
                ? 
                    items.map(item => 
                        <ConversationItemCartContainer
                                key={item}
                                id={item}
                                onClickItem={onClickItem}
                        /> 
                    )
                
                : <span>isFetching</span>
            }
        </div>
    )
}

export default ConversationList;