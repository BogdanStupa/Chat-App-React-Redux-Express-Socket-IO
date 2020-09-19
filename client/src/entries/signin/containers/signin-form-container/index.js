import React from "react";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";
import { schemaSignIn } from "modules/schems";


const SignInFormContainer = () => {
    const {
        NICKNAME,
        PASSWORD,
        SIGNIN
    } = constants.LABELS.AUTH;

    const height = "2.5rem";
    const marginTop = "2rem";

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(schemaSignIn)
    });
    
    const onSubmit = (data) => {
        console.log("Submit", data);
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

            <ButtonComponent
                type="submit"
                text={SIGNIN}
                height={height}
                marginTop={marginTop}
            />
        </form>
    );
}

export default compose(
    React.memo
)(SignInFormContainer);