import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";
import { schemaSignUp } from "modules/schems";

import { 
    signUpRequest
}  from "redux/actions/auth";



const SignUpFormContainer = React.memo(() => {
    const { 
        NICKNAME,
        PASSWORD,
        CONFIRM_PASSWORD, 
        SIGNUP
    } = constants.LABELS.AUTH;

    const height = "2.5rem";
    const marginTop = "2rem";

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(schemaSignUp)
    });

    const dispatch = useDispatch();
    

    const onSubmit = (data) => {
        console.log("Submit", data);
        dispatch(signUpRequest(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputFormComponent
                type="text"
                name="nickname"
                placeholder={NICKNAME}
                height={height}
                ref={register}
                errors={errors.nickname?.message}
            />        
            <InputFormComponent
                type="password"
                name="password"
                placeholder={PASSWORD}
                height={height}
                ref={register}
                errors={errors.password?.message}
            />
            <InputFormComponent
                type="password"
                name="confirmPassword"
                placeholder={CONFIRM_PASSWORD}
                height={height}
                ref={register}
                errors={errors.confirmPassword?.message}
            />
            <ButtonComponent
                type="submit"
                text={SIGNUP}
                height={height}
                marginTop={marginTop}
            />
        </form>
    );
});


export default SignUpFormContainer;