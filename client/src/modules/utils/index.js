import Cookies from "js-cookie";
import constants from "modules/constants";
import { reset } from "redux/actions/main";
import store from "redux/store";
import moment from "moment";

const setCookie = (name, value, expires) => Cookies.set(name, value, { expires });

const getCookieJson = name => Cookies.getJSON(name);

const removeCookie = name => Cookies.remove(name);


export const setUser = user => setCookie(constants.GLOBAL.USER_COOKIE_NAME, user, constants.GLOBAL.EXPIRES);

export const setToken = token => setCookie(constants.GLOBAL.USER_COOKIE_TOKEN, token, constants.GLOBAL.EXPIRES);

export const removeUser = () => removeCookie(constants.GLOBAL.USER_COOKIE_NAME);

export const removeToken = () => removeCookie(constants.GLOBAL.USER_COOKIE_TOKEN);


export const getUser = () => getCookieJson(constants.GLOBAL.USER_COOKIE_NAME);

export const getToken = () => getCookieJson(constants.GLOBAL.TOKEN_COOKIE_NAME);


const resetRedux = () => {
    store.dispatch(reset());
}

export const logout = async () => {
    await removeUser();
    await removeToken();
    await resetRedux();
}

export const login = async (user, token) => {
    await setToken(token);
    return await setUser(user);
}


export const isEmptyObject = (value) => {
    return value && Object.keys(value).length === 0 && value.constructor === Object;
}

export const toConversationDate = date => {
    const diffD = moment(moment.utc().toDate()).diff(date, "days");
    const diffH = moment(moment.utc().toDate()).diff(date, "hours");

    if(diffH <= 0 || diffD <= 0){
        return moment(date).format("HH:mm");
    }
    if(diffD <= 6){
        return moment(date).format("DD/MM HH:mm");
    }
    return moment(date).format("DD/MM/YYYY HH:mm");
}