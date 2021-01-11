import {
    INIT_DRAWER,
    OPEN_DRAWER,
    CLOSE_DRAWER
} from "redux/constants/drawer";

export const initDrawer = (drawerName) => {
    return {
        type: INIT_DRAWER,
        drawerName
    }
}

export const openDrawer = (drawerName) => {
    return {
        type: OPEN_DRAWER,
        drawerName
    }
}

export const closeDrawer = (drawerName) => {
    return {
        type: CLOSE_DRAWER,
        drawerName
    }
}