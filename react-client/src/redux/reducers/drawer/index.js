import {
    INIT_DRAWER,
    OPEN_DRAWER,
    CLOSE_DRAWER
} from "redux/constants/drawer";
import { RESET } from "redux/constants/main";


const initialState = {}

const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_DRAWER:
            return {
                ...state, 
                [action.drawerName]:{
                    isOpen: false
                }
            };

        case OPEN_DRAWER:
            return {
                ...state, 
                [action.drawerName]:{
                    isOpen: true
                }
            };
        
        case CLOSE_DRAWER:
            return {
                ...state, 
                [action.drawerName]:{
                    isOpen: false
                }
            };

        case RESET:
            return initialState;
        
        default:
            return state;
    }
}

export default drawerReducer;