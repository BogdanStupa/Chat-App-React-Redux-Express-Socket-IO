import React from "react";
import { SignUpFormContainer } from "./containers";
import { AuthContainer } from "shared/containers";
import {
    LabelComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignUpEntry(){
    const {
        SIGNUP,
        DONT_HAVE_AN_ACCOUNT,
        SIGNIN
    } = constants.LABELS.AUTH;


    return (
        <AuthContainer
            title={SIGNUP}
            formContainer={(
                <SignUpFormContainer/>
            )}
            footerInfo={(
                <LabelComponent text={DONT_HAVE_AN_ACCOUNT}>
                    <ButtonComponent
                        text={SIGNIN}
                        link
                    />    
                </LabelComponent>
            )}
        />
    );
}

export default SignUpEntry;