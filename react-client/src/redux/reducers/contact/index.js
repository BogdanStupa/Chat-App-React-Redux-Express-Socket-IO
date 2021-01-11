import {
    SEARCH_NEW_CONTACT_REQUEST,
    SEARCH_NEW_CONTACT_DONE,
    CLEAR_SEARCH_BUFFER
} from "redux/constants/contact";


const initialState = {
    isFetching: false,
    contactItem: null
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_NEW_CONTACT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
            
        case SEARCH_NEW_CONTACT_DONE: 
            return {
                ...state,
                isFetching: false,
                contactItem: action.payload
            };


        case CLEAR_SEARCH_BUFFER:
            return initialState;

        default:
            return state;
    }
} 

export default contactsReducer;


