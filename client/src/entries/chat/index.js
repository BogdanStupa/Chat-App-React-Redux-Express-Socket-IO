import React from "react";
import { withAuthRedirect } from "shared/hocs";
import {
    LabelComponent,
    InputFormComponent
} from "shared/components";

function ChatEntry(){
    return (
        "Chat App"
    );
}

export default withAuthRedirect(ChatEntry);