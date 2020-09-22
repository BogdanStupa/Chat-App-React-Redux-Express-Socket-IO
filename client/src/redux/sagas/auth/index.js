import {  
    put,  
    takeLatest,
    call
} from "redux-saga/effects";
import { 
    signUpSuccess,
    signUpError,
    signInSuccess,
    signInError,
    isAuth
 }  from "redux/actions/auth";
import { 
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNIN_REQUEST
} from "redux/constants/auth";
import {
    login,
    logout
} from "modules/utils";
import axios from "axios";
import constants from "modules/constants";


const SIGNUP_URL = constants.API.ROOT + constants.API.ACTIONS.AUTH_SIGNUP;
const SIGNIN_URL = constants.API.ROOT + constants.API.ACTIONS.AUTH_SIGNIN;


function fetchSignUpRequest(data){
    return axios.post(SIGNUP_URL, { 
        nickname: data.nickname,
        password: data.password
    });
} 

function fetchSignInRequest(data){
    return axios.post(SIGNIN_URL,{ 
        nickname: data.nickname,
        password: data.password
    });
}


function* workerSignUp(props){
    try{
        const { data } = yield call(fetchSignUpRequest, props.payload);
        yield put(signUpSuccess(data)); 
        
        if(data.success && data.token &&  data.user){
            const auth = yield login(data.user, data.token);
            yield put(isAuth(auth));
        }else{

        }
    }catch(error){
        yield put(signUpError(error));
    }

}
function* workerSignIn(props){
    try{
        const { data } = yield call(fetchSignInRequest, props.payload);
        yield put(signInSuccess(data));
        
        if(data.success && data.token &&  data.user){
            const auth = yield login(data.user, data.token);
            yield put(isAuth(auth));
        }else{

        }
    }catch(error){
        yield put(signInError(error));
    }
}

const sagas = [
    takeLatest(AUTH_SIGNUP_REQUEST,workerSignUp),
    takeLatest(AUTH_SIGNIN_REQUEST,workerSignIn)
];

export default sagas;