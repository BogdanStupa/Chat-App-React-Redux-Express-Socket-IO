import React from "react";
import classNames from "classnames";


const MessageComponent = props => {
    const {
        onMouseOver,
        message,
        sender,
        date
    } = props;

    const styles=classNames({
        "conversation-message": true,
        "posted-by-current-user": sender,
    });

    return (
        <div 
            className={styles}
            //onMouseOver={}
        >
            <div>
                {message}
            </div>
            <div className="date-send">
                {date}
            </div>
        </div>
    );
}

export default MessageComponent;