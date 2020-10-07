import React from "react";
import classNames from "classnames";


const UserInfoComponent = props => {
    const {
        profile,
        title,
        rowMode
    } = props;
    
    const profileText = profile.label.slice(0,2); //test this on undefined

    const containerStyles = classNames({
        "user-info": true,
        "column-mode": !rowMode,
        "row-mode": rowMode
    });

    return (
        <div className={containerStyles}>
            <div 
                className="user-info-profile" 
                style={{
                    backgroundColor: profile.backgroundColor,
                    width: profile.width,
                    height: profile.height,
                    fontSize: profile.fontSize
                }}>
                    {profileText}
            </div>
            <p 
                className="user-info-nickname"
                style={{
                    fontSize: title.fontSize,
                    color: title.color
                }}
            >
                    {title.nickname}
            </p>
        </div>
    );
};

export default UserInfoComponent;