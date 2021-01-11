import React from "react";
import { compose } from "redux";
import { SignUpFormContainer } from "./containers";
import { AuthContainer } from "shared/containers";
import {
    LabelComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


const SignUpEntry = ({ history }) => {
    const {
        SIGNUP,
        ALREADY_HAVE_AN_ACCOUNT,
        SIGNIN
    } = constants.LABELS.AUTH;

   const onClick = () => history.push("/signin");
   
    return (
        <AuthContainer
            title={SIGNUP}
            formContainer={(
                <SignUpFormContainer/>
            )}
            footerInfo={(
                <LabelComponent text={ALREADY_HAVE_AN_ACCOUNT}>
                    <ButtonComponent
                        text={SIGNIN}
                        link
                        onClick={onClick}
                    />    
                </LabelComponent>
            )}
        />
    );
};

export default compose(
    React.memo
)(SignUpEntry);