import {
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL 
} from "redux/constants/contact";
import {
    RESET
} from "redux/constants/main";


const initialState = {
    isFetching: false,
    contactsItems: []
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS_REQUEST:
            return {
                ...state,
                contacts: {
                    isFetching: true
                }
            };
            
        case GET_CONTACTS_SUCCESS: 
            return {
                ...state,
                contacts: {
                    isFetching: false,
                    contactsItems: action.payload
                }
            };

        case GET_CONTACTS_FAIL:
            return {
                ...state,
                contacts: {
                    isFetching: false,
                    errors: action.payload,
                    contactsItems: []
                }
            }

        case RESET:
            return initialState;

        default:
            return state;
    }
} 

export default contactsReducer;


