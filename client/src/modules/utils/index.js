import Cookies from "js-cookie";
import constants from "modules/constants";
import { reset } from "redux/actions/main";
import store from "redux/store";


const setCookie = (name, value, expires) => Cookies.set(name, value, { expires });

const getCookieJson = name => Cookies.getJSON(name);

const removeCookie = name => Cookies.remove(name);


export const setUser = user => setCookie(constants.GLOBAL.USER_COOKIE_NAME, user, constants.GLOBAL.EXPIRES);

export const setToken = token => setCookie(constants.GLOBAL.USER_COOKIE_TOKEN, token, constants.GLOBAL.EXPIRES);

export const removeUser = () => removeCookie(constants.GLOBAL.USER_COOKIE_NAME);

export const removeToken = () => removeCookie(constants.GLOBAL.USER_COOKIE_TOKEN);


export const getUser = () => getCookieJson(constants.GLOBAL.USER_COOKIE_NAME);


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