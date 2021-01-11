import React from "react";
import classNames from "classnames";
import { ProfileCircle } from "shared/components";

const UserInfoComponent = props => {
    const {
        profile,
        title,
        rowMode
    } = props;
    
    const containerStyles = classNames({
        "user-info": true,
        "column-mode": !rowMode,
        "row-mode": rowMode
    });

    return (
        <div className={containerStyles}>
            <ProfileCircle
                profile={profile}
            />
            <p 
                className="user-info-nickname"
                style={{
                    fontSize: title.fontSize,
                    color: title.color,
                    fontWeight:"bold"
                }}
            >
                    {title.nickname}
            </p>
        </div>
    );
};

export default UserInfoComponent;