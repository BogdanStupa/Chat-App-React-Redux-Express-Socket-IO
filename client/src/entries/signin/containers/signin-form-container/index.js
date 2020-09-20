import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";
import { schemaSignIn } from "modules/schems";
import { signInRequest } from "redux/actions/auth";


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

    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.auth.signIn.isFetching);

    const onSubmit = (data) => {
        dispatch(signInRequest({ 
            nickname: data.nickname,
            password: data.password 
        }));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputFormComponent
                type="text"
                name="nickname"
                placeholder={NICKNAME}
                height={height}
                autoFocus
                isFetching={isFetching}
                ref={register}
                errors={errors.nickname?.message}
            />

            <InputFormComponent
                type="password"
                name="password"
                placeholder={PASSWORD}
                height={height}
                isFetching={isFetching}
                ref={register}
                errors={errors.password?.message}
            />

            <ButtonComponent
                type="submit"
                text={SIGNIN}
                height={height}
                marginTop={marginTop}
                isFetching={isFetching}
            />
        </form>
    );
}

export default compose(
    React.memo
)(SignInFormContainer);