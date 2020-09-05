import React from "react";
import { withAuthRedirect } from "shared/hocs";

function SignInEntry(){
    return (
        "SignIn"
    )
}

export default withAuthRedirect(SignInEntry);