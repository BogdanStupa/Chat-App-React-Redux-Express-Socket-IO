import React from "react";
import { FormContainer } from "shared/containers";
import {
    LabelComponent,
    InputComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignUpFormContainer(){
    const { 
        NICKNAME,
        PASSWORD,
        CONFIRM_PASSWORD, 
        SIGNUP
    } = constants.LABELS.AUTH;
        

    return (
        <FormContainer>
             <LabelComponent text={NICKNAME}>
                <InputComponent
                    type="text"
                    value={NICKNAME}
                />
            </LabelComponent> 

            <LabelComponent text={PASSWORD}>
                <InputComponent
                    type="text"
                    value={PASSWORD}
                />
            </LabelComponent> 

            <LabelComponent text={CONFIRM_PASSWORD}>
                <InputComponent
                    type="text"
                    value={CONFIRM_PASSWORD}
                />
            </LabelComponent> 

            <ButtonComponent
                text={SIGNUP}
            />
        </FormContainer>
        );
}

export default SignUpFormContainer;