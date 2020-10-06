import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    UserInfoComponent,
    InputSearchComponent
} from "entries/chat/components";
import {
    ConversationList
} from "entries/chat/containers";
import {
    ButtonComponent,
    DropDownMenuComponent,
    IconComponent,
    DrawerComponent
} from "shared/components";
import constants from "modules/constants";
import {
    getUser,
    logout
} from "modules/utils";
import { openDrawer } from "redux/actions/drawer";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const drawerNames = {
    contactList: "constactList",
    searchContact: "searchContact"
}


const ActionWrapper = props => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const { nickname, profileColor } = getUser() || {}

    const dispatch = useDispatch();
    useEffect(() => {
        if(!isAuth){
            props.history.push("/signin");
        }
    },[isAuth]);

    const handleLogout = () => logout();
    

    const handleOpenCotactDrawer = () => {
        dispatch(openDrawer(drawerNames.contactList));
    }
    const handleOpenSearchCotactDrawer = () => {
        dispatch(openDrawer(drawerNames.searchContact));
    }
    


    return (
        <div className="actions-wrapper">
            <header className="header-container">
                <div className="header-info">
                    <UserInfoComponent
                        nickname={nickname}
                        profileColor={profileColor}
                    />
                </div>
                
                <div className="header-actions">
                    <Tippy
                        placement="bottom-start"
                        content={constants.LABELS.CHAT.SEARCH_CONTACT}
                    >
                        <ButtonComponent 
                            width="2rem"
                            height="2rem"
                            link
                            onClick={handleOpenSearchCotactDrawer}
                        >
                            <IconComponent
                                fill="#555657"
                                icon="account-plus"
                                width="1.5rem"
                                height="1.5rem"
                            />
                        </ButtonComponent>    
                    </Tippy>
                    
                    <Tippy 
                        placement="bottom" 
                        content={constants.LABELS.CHAT.CONTACTS}
                    >
                        <ButtonComponent 
                            width="2rem"
                            height="2rem"
                            link
                            onClick={handleOpenCotactDrawer}
                        >
                            <IconComponent
                                fill="#555657"
                                icon="message-text"
                                width="1.5rem"
                                height="1.5rem"
                            />
                        </ButtonComponent>
                    </Tippy>
                        
                    <DropDownMenuComponent
                        icon={<IconComponent
                                fill= "#555657"
                                icon= "dots-vertical"
                                width="1.5rem"
                                height="1.5rem"   
                            />}
                        options={[
                            {
                                text: constants.LABELS.CHAT.LOGOUT,
                                onClick: handleLogout
                            },
                            {
                                text: "Settings"
                            }
                        ]}
                    />                                        
        
                </div>
            </header>
            <div>
                <InputSearchComponent
                />
            </div>
            <ConversationList
            
            />
            <DrawerComponent
                drawerName={drawerNames.contactList}
                title={constants.LABELS.CHAT.CONTACTS}
                icon="arrow-left"
            >
                
            </DrawerComponent>

            <DrawerComponent
                drawerName={drawerNames.searchContact}
                title={constants.LABELS.CHAT.SEARCH_CONTACT}
                icon="arrow-left"
            >
                
            </DrawerComponent>

            
        </div>
    )
}

export default ActionWrapper;