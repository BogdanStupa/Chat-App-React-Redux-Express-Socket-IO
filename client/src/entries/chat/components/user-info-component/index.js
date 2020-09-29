import React from "react";

const UserInfoComponent = props => {
    const {
        nickname,
        profileColor
    } = props;
    
    const profileText = nickname.slice(0,2);

    return (
        <div className="user-info">
            <div 
                className="user-info-profile" 
                style={{
                    backgroundColor: profileColor
                }}>
                    {profileText}
            </div>
            <p className="user-info-nickname">{nickname}</p>
        </div>
    );
};

export default UserInfoComponent;