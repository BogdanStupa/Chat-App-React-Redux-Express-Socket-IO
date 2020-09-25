import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,

    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR,

    IS_AUTH
} from "redux/constants/auth";
import Cookies from "js-cookie";
import constants from "modules/constants";


const initialState = {
    signIn: {
        isFetching: false,
        errors: {}
    },
    signUp: {
        isFetching: false,
        errors: {}
    },
    isAuth: Cookies.getJSON(constants.GLOBAL.USER_COOKIE_NAME) || null
}

console.log(Cookies.getJSON(constants.GLOBAL.TOKEN_COOKIE_NAME));

const authReducer = (state = initialState, action) => {
    switch(action.type){
        //-------SIGN UP ----------------

        case AUTH_SIGNUP_REQUEST:
            return {
                ...state,
                signUp: {
                    isFetching: true
                }
            };

        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                signUp: {
                    isFetching: false,
                    data: action.payload
                }
            };

        case AUTH_SIGNUP_ERROR:
            return {
                ...state,
                signUp: {
                    isFetching: false,
                    errors: action.payload
                }
            };
        //-------SIGN IN ----------------

        case AUTH_SIGNIN_REQUEST:
            return {
                ...state,
                signIn: {
                    isFetching: true
                }
            };

        case AUTH_SIGNIN_SUCCESS:
            return {
                ...state,
                signIn: {
                    isFetching: false,
                    data: action.payload
                }
            };

        case AUTH_SIGNIN_ERROR:
            return {
                ...state,
                signIn: {
                    isFetching: false,
                    errors: action.payload
                }
            };
        
        case IS_AUTH:
            return {
                ...state,
                ...initialState,
                 isAuth: Cookies.getJSON(constants.GLOBAL.USER_COOKIE_NAME) || null
            }    
        
        default:
            return state;
    }
}



export default authReducer;