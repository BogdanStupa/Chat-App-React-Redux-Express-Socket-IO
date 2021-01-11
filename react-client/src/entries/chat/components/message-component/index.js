import React, { useEffect, useState } from "react";
import classNames from "classnames";
import VizSensor from "react-visibility-sensor";



const MessageComponent = React.forwardRef((props, ref) => {
    const {
        handleVisibleMessage,
        message,
        sender,
        date,
        toThisScrolling,
        isUnreadMessage,
        containmentDOMRect,
        id
    } = props;  

    const styles=classNames({
        "conversation-message": true,
        "posted-by-current-user": sender,
    });

    let wasNotVisbile = isUnreadMessage;

    useEffect(() => {
        if(toThisScrolling && ref) {
            toThisScrolling(ref);
        }
    },[ref]);
    
    const handleChangeVisibility = isVisible => {
        if(isVisible && wasNotVisbile){
            handleVisibleMessage(ref);
            wasNotVisbile = false;
        }
    }
    
    return (
        <VizSensor 
            onChange={handleChangeVisibility}
            containment={containmentDOMRect}
            offset={{ top: 100, bottom: 100 }}
        >
            <div 
                className={styles}
                ref={ref}
            >
                <div>
                    {message}
                </div>
                <div className="date-send">
                    {date}
                </div>
            </div>
        </VizSensor>
    );
});

export default MessageComponent;