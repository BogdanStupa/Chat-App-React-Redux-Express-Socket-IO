import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,

    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR,

    AUTH_LOGOUT_REQUEST,
    AUTH_LOGOUT_DONE,

    SET_IS_AUTH
} from "redux/constants/auth";


//---------------------SIGN UP ------------------
export const signUpRequest = (data) => {
    return {
        type: AUTH_SIGNUP_REQUEST,
        payload: data
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


//---------------------SIGN IN ------------------

export const signInRequest = (data) => {
    return {
        type: AUTH_SIGNIN_REQUEST,
        payload: data
    };
}

export const signInSuccess = (data) => {
    return {
        type: AUTH_SIGNIN_SUCCESS,
        payload: data
    };
}


export const signInError = (error) => {
    return {
        type: AUTH_SIGNIN_ERROR,
        payload: error
    };
}

//---------------------IS AUTH------------------

export const setIsAuth = data => {
    return {
        type: SET_IS_AUTH,
        payload: data
    };
}



//----------------------LOGOUT-------------------
export const logoutRequest = data => {
    return {
        type: AUTH_LOGOUT_REQUEST,
        payload: data
    };
}

export const doneLogout = () => {
    return {
        type: AUTH_LOGOUT_DONE
    };
}

