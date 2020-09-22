import React from "react";
import { compose } from "redux";
import { SignInFormContainer } from "./containers";
import { AuthContainer } from "shared/containers";
import {
    LabelComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


const SignInEntry = ({ history }) => {
    const {
        SIGNIN,
        DONT_HAVE_AN_ACCOUNT,
        SIGNUP
    } = constants.LABELS.AUTH;

    const onClick = () => {
        history.push("/signup");
   }

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
                        onClick={onClick}
                    />    
                </LabelComponent>
            )}
        />
    )
}

export default compose(
    React.memo
)(SignInEntry);