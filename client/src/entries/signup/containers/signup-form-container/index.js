import React from "react";
import { FormContainer } from "shared/containers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignUpFormContainer(props){
    const { 
        NICKNAME,
        PASSWORD,
        CONFIRM_PASSWORD, 
        SIGNUP
    } = constants.LABELS.AUTH;
    const {
        SIGNUPFORM
    } = constants.LABELS.FORMS;
    const height = "2.5rem";
    const marginTop = "1rem";

    return (
        <FormContainer  
            formName={SIGNUPFORM}
			values={{
				nickname: "",
				password: "",
				confirmPassword: ""
			}}      
            render={
                ({handleChange}) => {
                    return (
                        <form>
                            <InputFormComponent
                                type="text"
                                name={NICKNAME}
                                placeholder={NICKNAME}
                                height={height}
                                onChange={handleChange}
                            />

                            <InputFormComponent
                                type="text"
                                placeholder={PASSWORD}
                                name={PASSWORD}
                                height={height}
                                onChange={handleChange}
                            />

                            <InputFormComponent
                                type="text"
                                placeholder={CONFIRM_PASSWORD}
                                name={CONFIRM_PASSWORD}
                                height={height}
                                onChange={handleChange}
                            />

                            <ButtonComponent
                                text={SIGNUP}
                                height={height}
                                marginTop={marginTop}
                            />
                        </form>
                    )
                }
            }
        />
    );
}

export default SignUpFormContainer;