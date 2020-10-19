import {
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL
} from "redux/constants/contact";

export const getContactsRequest = () => {
    return {
        type: GET_CONTACTS_REQUEST
    };
}

export const getContactsSuccess = data => {
    return {
        type: GET_CONTACTS_SUCCESS,
        payload: data
    };
}

export const getContactsFail = error => {
    return {
        type: GET_CONTACTS_FAIL,
        payload: error
    };
}