import { call, put } from "redux-saga/effects";
import axios from "axios";
import constants from "modules/constants";
import { setIsAuth } from "redux/actions/auth";
import { getToken, getUser, setToken, logout } from "modules/utils";


const REFRESH_TOKEN_URL = constants.API.ROOT + constants.API.ACTIONS.REFRESH_TOKEN;


function fetchRefreshAccessToken(data){
    return axios.post(REFRESH_TOKEN_URL, {
        _id: data._id,
        refreshToken: data.refreshToken
    });
}

/**
 * 
 * @param {
 *     payload,
 *     actionCreator
 *  } props 
 */
function* refreshAccessToken(props){ 
    try {
        const { refreshToken } = yield getToken();
        const { _id } = yield getUser();
        const { data } = yield call(fetchRefreshAccessToken,{ _id, refreshToken}); 
        yield call(setToken,{token: data.token, refreshToken });;
        yield put(props.actionCreator({...props.payload}));
    } catch (error) {
        yield call(logout);
        yield put(setIsAuth(null));
    }
}


function* refreshAccessTokenWorker(response, props){
    try{
        if(response && response.status == "403"){
            yield call(refreshAccessToken, {
                payload: props.payload,
                actionCreator: props.actionCreator
            });
        }
    }catch(error){
        yield call(logout);  
        yield put(setIsAuth(null));
    }
}

export {
    refreshAccessTokenWorker
};