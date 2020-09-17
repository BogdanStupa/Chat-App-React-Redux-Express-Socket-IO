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

    const {
        SIGNINFORM
    } = constants.LABELS.FORMS;

    const height = "2.5rem";
    const marginTop = "1rem";
    
    return (
        <FormContainer
            formName={SIGNINFORM}
            values={{
				nickname: "",
				password: ""
			}} 
            render={({
                    handleChange
                }) => {
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
                                name={PASSWORD}
                                placeholder={PASSWORD}
                                height={height}
                                onChange={handleChange}
                            />

                            <ButtonComponent
                                text={SIGNIN}
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

export default SignInFormContainer;