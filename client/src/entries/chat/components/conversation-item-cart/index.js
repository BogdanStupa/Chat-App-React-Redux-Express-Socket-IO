import React from "react";
import classNames from "classnames";
import { ProfileCircle } from "shared/components";
import { toConversationDate } from "modules/utils";


const ConversationItemCart = props => {
    const {
        profile,
        message,
        unreadMessages,
        nickname,
        partnerId,
        onClickItem,
        id,
        isActive,
        token
    } = props;

    console.log("CONVERSATION ITEM CART", nickname);

    const handleClickItem = () => onClickItem({
                                    conversationId: id,
                                    nickname,
                                    profileColor: profile.backgroundColor,
                                    partnerId: partnerId,
                                    unreadMessages,
                                    token
                                });

    const styles = classNames({
        "conversation-item-cart-component": true,
        "isActive": isActive
    });
    
    return (
        <div 
            className={styles}
            tabIndex="0"
            onClick={handleClickItem}
            style={{
                height:profile.height
            }}
        >
            <ProfileCircle
                profile={profile}
            />  
            <div 
                className="conversation-item-cart-container"
                style={{
                    width:`calc(100% - ${profile.width}px)`
                }}    
            >
                
                <div className="conversation-item-cart-header">
                    <div style={{fontSize: 16, fontWeight: "bold"}}>{nickname}</div>
                    <div>{message.dateTime ? toConversationDate(message.dateTime) : null}</div>
                </div>
                <div className="conversation-item-cart-last-message-container">
                    <div className="conversation-item-cart-last-message">{message.messageText}</div>
                    {
                        unreadMessages ? <div className="conversation-item-cart-unread-messages">{unreadMessages}</div> : null 
                    }
                     </div>

            </div>

        </div>
    );
}   

export default ConversationItemCart;