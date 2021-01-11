import {
    SEARCH_NEW_CONTACT_REQUEST,
    SEARCH_NEW_CONTACT_DONE,
    CLEAR_SEARCH_BUFFER
} from "redux/constants/contact";

export const searchNewContactRequest = data => {
    return {
        type: SEARCH_NEW_CONTACT_REQUEST,
        payload: data,
        actionCreator: searchNewContactRequest
    };
}

export const searchNewContactDone = data => {
    return {
        type: SEARCH_NEW_CONTACT_DONE,
        payload: data
    };
}

export const clearSearchBuffer = () => {
    return {
        type: CLEAR_SEARCH_BUFFER
    };
}


