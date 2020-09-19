import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,
} from "redux/constants/auth";

export const signUpRequest = (nickname, password) => {
    return {
        type: AUTH_SIGNUP_REQUEST,
        payload: {
            nickname,
            password
        }
    };
}

export const signUpSuccess = (data) => {
    return {
        type: AUTH_SIGNUP_SUCCESS,
        payload: data
    };
}


export const signUpError = (error) => {
    return {
        type: AUTH_SIGNUP_ERROR,
        payload: error
    };
}