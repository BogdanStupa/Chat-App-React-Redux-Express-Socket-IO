import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,

    AUTH_SIGNIN_REQUEST,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_ERROR
} from "redux/constants/auth";


const initialState = {
    signIn: {
        isFetching: false,
        errors: {}
    },
    signUp: {
        isFetching: false,
        errors: {}
    }
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
        
        default:
            return state;
    }
}



export default authReducer;