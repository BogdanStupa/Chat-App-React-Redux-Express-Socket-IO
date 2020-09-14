import React from "react";
import { FormContainer } from "shared/containers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignInFormContainer(){
    const {
        NICKNAME,
        PASSWORD,
        SIGNIN
    } = constants.LABELS.AUTH;

    const height = "2.5rem";
    const marginTop = "1rem";
    
    return (
        <FormContainer>
            <InputFormComponent
                type="text"
                value={NICKNAME}
                height={height}
            />

            <InputFormComponent
                type="text"
                value={PASSWORD}
                height={height}
            />

            <ButtonComponent
                text={SIGNIN}
                height={height}
                marginTop={marginTop}

            />
        </FormContainer>
        );
}

export default SignInFormContainer;