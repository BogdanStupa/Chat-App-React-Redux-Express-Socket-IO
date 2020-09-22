import Cookies from "js-cookie";
import constants from "modules/constants";


const setCookie = (name, value, expires) => Cookies.set(name, value, { expires });

const removeCookie = (name) => Cookies.remove(name);


export const setUser = user => setCookie(constants.GLOBAL.USER_COOKIE_NAME, user, constants.GLOBAL.EXPIRES);

export const setToken = token => setCookie(constants.GLOBAL.USER_COOKIE_TOKEN, token, constants.GLOBAL.EXPIRES);

export const removeUser = () => removeCookie(constants.GLOBAL.USER_COOKIE_NAME);

export const removeToken = () => removeCookie(constants.GLOBAL.USER_COOKIE_TOKEN);

export const logout = async () => {
    await removeUser();
    await removeToken();
}

export const login = async (user, token) => {
    await setToken(token);
    return await setUser(user);
}
