import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,

    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR,

    SET_IS_AUTH
} from "redux/constants/auth";
import { RESET } from "redux/constants/main";
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
                    isFetching: false
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
        
        case SET_IS_AUTH:
            return {
                ...state,
                ...initialState,
                 isAuth: action.payload || null
            }    
        
        case RESET:
            return initialState;

        default:
            return state;
    }
}



export default authReducer;