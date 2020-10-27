import React, { useEffect, useState } from "react";
import classNames from "classnames";
import VisibilitySensor from "react-visibility-sensor";



const MessageComponent = React.forwardRef((props, ref) => {
    const {
        handleVisibleMessage,
        message,
        sender,
        date,
        toThisScrolling,
        isUnreadMessage,
        containmentDOMRect
    } = props;  

    const styles=classNames({
        "conversation-message": true,
        "posted-by-current-user": sender,
    });

    const [wasNotVisbile, setWasNotVisible] = useState(isUnreadMessage);

    useEffect(() => {
        if(toThisScrolling && ref) {
            toThisScrolling(ref);
        }
    },[ref]);
    
    const handleChangeVisibility = isVisible => {
        if(isVisible && wasNotVisbile){
            handleVisibleMessage(ref);
            setWasNotVisible(false);
        }
    }

    return (
        <VisibilitySensor 
            onChange={handleChangeVisibility}
            containment={containmentDOMRect}
            offset={{ top: -10 }}
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
        </VisibilitySensor>
    );
});

export default MessageComponent;