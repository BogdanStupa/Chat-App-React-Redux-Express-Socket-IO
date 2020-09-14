import React from "react";
import { withAuthRedirect } from "shared/hocs";
import { SignInFormContainer } from "./containers";
import { AuthContainer } from "shared/containers";
import {
    LabelComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignInEntry(){
    const {
        SIGNIN,
        DONT_HAVE_AN_ACCOUNT,
        SIGNUP
    } = constants.LABELS.AUTH;


    return (
        <AuthContainer
            title={SIGNIN}
            formContainer={(
                <SignInFormContainer/>
            )}
            footerInfo={(
                <LabelComponent text={DONT_HAVE_AN_ACCOUNT}>
                    <ButtonComponent
                        text={SIGNUP}
                        link
                    />    
                </LabelComponent>
            )}
        />
    )
}

export default withAuthRedirect(SignInEntry);