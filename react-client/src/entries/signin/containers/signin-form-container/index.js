import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";
import { schemaSignIn } from "modules/schems";
import { signInRequest } from "redux/actions/auth";


const SignInFormContainer = (props) => {
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
    const isAuth = useSelector(state => state.auth.isAuth);

    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

    useEffect(() => {
        if(isAuth){
            props.history.push(redirect);
        }
        return () => {};
    },[isAuth]);

    const onSubmit = data => {
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
                    marginTop="1.5rem"
                    isFetching={isFetching}
                    ref={register}
                    errors={errors.nickname?.message}
                />

                <InputFormComponent
                    type="password"
                    name="password"
                    placeholder={PASSWORD}
                    height={height}
                    marginTop="1.5rem"
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
    React.memo,
    withRouter
)(SignInFormContainer);