import React from "react";
import { withAuthRedirect } from "shared/hocs";

function ChatEntry(){
    return (
        "Chat Entry"
    );
}

export default withAuthRedirect(ChatEntry);