import {  
    put,  
    takeLatest,
    call
} from "redux-saga/effects";
import { 
    signUpSuccess
 }  from "redux/actions/auth";
import { 
    AUTH_SIGNUP_REQUEST 
} from "redux/constants/auth";


async function fetchSignUpRequest(){
    return new Promise( resolve => {
        setTimeout(() => resolve({ok: true}), 3000)
      });
    
   
} 

 function* workerSignUp(){
     const data = yield call(fetchSignUpRequest);
     yield put(signUpSuccess(data));
 }

 const sagas = [
    takeLatest(AUTH_SIGNUP_REQUEST,workerSignUp)
 ];

 export default sagas;