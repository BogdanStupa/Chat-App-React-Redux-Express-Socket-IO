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
    setIsAuth,
    doneLogout
 }  from "redux/actions/auth";
import { 
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNIN_REQUEST,
    AUTH_LOGOUT_REQUEST
} from "redux/constants/auth";
import {
    login,
    logout,
    getToken
} from "modules/utils";
import axios from "axios";
import constants from "modules/constants";


const SIGNUP_URL = constants.API.ROOT + constants.API.ACTIONS.AUTH_SIGNUP;
const SIGNIN_URL = constants.API.ROOT + constants.API.ACTIONS.AUTH_SIGNIN;
const LOGOUT_URL = constants.API.ROOT + constants.API.ACTIONS.AUTH_LOGOUT;


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

function fetchLogout(data){
    return axios.delete(LOGOUT_URL+`/${data._id}` + `/${data.refreshToken}`);
}


function* workerSignUp(props){
    try{
        yield call(fetchSignUpRequest, props.payload);
        yield put(signUpSuccess()); 
    }catch(error){
        yield put(signUpError(error));
    }

}
function* workerSignIn(props){
    try{
        const { data } = yield call(fetchSignInRequest, props.payload);
        if(data.success && data.token &&  data.user){
            const res = yield call(login, data.user, { token: data.token, refreshToken: data.refreshToken});
            yield put(setIsAuth(res));
            yield put(signInSuccess(data));
        }else{
            yield put(signInError("Something wrong"));
        }
    }catch(error){
        yield put(signInError(error));
    }
}


/*
    props:{
        payload: {
            _id: userId,
            refreshToken: refreshToken 
        }
    } 
*/
function* workerLogout(props){
    try {
        const { refreshToken } = getToken();
        yield call(fetchLogout, { refreshToken, ...props.payload });
        yield call(logout);
        yield put(setIsAuth(null));
    }catch(error){

    }finally {
        yield put(doneLogout());
    } 
}


const sagas = [
    takeLatest(AUTH_SIGNUP_REQUEST,workerSignUp),
    takeLatest(AUTH_SIGNIN_REQUEST,workerSignIn),
    takeLatest(AUTH_LOGOUT_REQUEST, workerLogout)
];

export default sagas;