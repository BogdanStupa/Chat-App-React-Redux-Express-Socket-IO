import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { createSelector } from "reselect";

import {
    ButtonComponent,
    IconComponent
} from "shared/components";
import { initDrawer, closeDrawer } from "redux/actions/drawer";

const selectIsOpen = createSelector(
    [ 
        (state,drawerName) => state.drawer[drawerName] || { [drawerName]: { isOpen: false }}
    ],
    (drawerNames) => drawerNames.isOpen || false
);


const DrawerComponent = props =>{
    const {
        children,
        title,
        icon,
        drawerName
    } = props;

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initDrawer(drawerName));
    },[]);

    const isOpen = useSelector(state => selectIsOpen(state, drawerName));

    const drawerStyles = classNames({
        drawer: true,
        open: isOpen 
    });

    const onClick = () => dispatch(closeDrawer(drawerName));

    return (
        <div className={drawerStyles}>
            {
                isOpen && 
                <div className="drawer-container">
                    <header className="drawer-header">
                        <div className="drawer-header-content">
                            <ButtonComponent
                                link
                                onClick={onClick}
                            >
                                
                                <IconComponent
                                    icon={icon}
                                    width={30}
                                    height={28}
                                />
                                
                            </ButtonComponent>  
                            <h3>{ title }</h3>
                        </div>        
                    </header>
                    {
                        children
                    }
                </div> 
            }
        </div>
    )
}



export default DrawerComponent;