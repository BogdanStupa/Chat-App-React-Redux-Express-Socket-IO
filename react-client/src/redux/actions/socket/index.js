import {
    START_CHANEL,
    STOP_CHANEL,
    SERVER_ON,
    SERVER_OFF
} from "redux/constants/socket";

export const startChanel = userId => {
    return {
        type: START_CHANEL,
        payload: { userId }
    };
}
export const stopChanel = () => {
    return {
        type: STOP_CHANEL
    };
}


export const serverOn = () => {
    return {
        type: SERVER_ON
    };
}
export const serverOff = () => {
    return {
        type: SERVER_OFF
    };
}