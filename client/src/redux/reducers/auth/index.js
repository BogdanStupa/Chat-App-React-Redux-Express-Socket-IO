import {
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR
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
        case AUTH_SIGNUP_REQUEST:
            return {
                ...state,
                signUp: {
                    ...state.signUp,
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
            console.log("IN REDUCER", action.payload);
            return {
                ...state,
                signUp: {
                    isFetching: false,
                    errors: action.payload
                }
            };
        
        default:
            return state;
    }
}



export default authReducer;