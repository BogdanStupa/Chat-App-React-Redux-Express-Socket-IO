import React from "react";


const ProfileCircle = props => {
    const {
        profile: {
            label,
            backgroundColor,
            width,
            height,
            fontSize
        } 
    } =  props;
    const profileText = label ? label.slice(0,2) : null; //test this on undefined

    return (
        <div 
            className="user-info-profile" 
            style={{
                backgroundColor: backgroundColor,
                width:width,
                height:height,
                minWidth: width,
                minHeight: height,
                fontSize: fontSize
            }}>
                {profileText}
        </div>
    );
}

export default ProfileCircle;