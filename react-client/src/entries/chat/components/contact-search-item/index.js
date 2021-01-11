import React from "react";
import { ProfileCircle } from "shared/components"; 

const ContactSearchItemCart = props => {
    const {
        onClickItem,
        profile,
        nickname,
        contactId
    } = props;

    const handleClickItem = () => onClickItem(contactId);

    return (
        <div 
            className="contact-search-item-cart"
            tabIndex="0"
            onClick={handleClickItem}
            style={{
                height:profile.height + 5  
            }}
        >
            <ProfileCircle
                profile={profile}
            />  
            <div style={{ 
                 fontSize: 20, 
                 fontWeight: "bold",
                 marginLeft: "1rem"
            }}>{nickname}</div>
        </div>
    );
}   

export default ContactSearchItemCart;