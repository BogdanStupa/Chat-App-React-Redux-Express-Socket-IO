import {
    SERVER_ON,
    SERVER_OFF
} from "redux/constants/socket";
import {
    RESET
} from "redux/constants/main";

const initialState = {
    serverIsOn: false
};

const socketReducer = (state = initialState, action) => {
    switch(action.type){
        case SERVER_ON:
            return {
                serverIsOn: true
            };
        case SERVER_OFF:
                return {
                   serverIsOn: false 
                };
        case RESET:
            return initialState;
        default: 
            return state;
    }
}

export default socketReducer;