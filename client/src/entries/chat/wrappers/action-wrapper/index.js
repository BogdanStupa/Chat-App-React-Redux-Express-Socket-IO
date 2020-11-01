import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
import { openDrawer } from "redux/actions/drawer";
import {
    getConversationsRequest,
    getCurrentConversationRequest
} from "redux/actions/conversation";
import { logoutRequest } from "redux/actions/auth";

const drawerNames = {
    contactList: "constactList",
    searchContact: "searchContact"
}



const ActionWrapper = ({ user }) => {
    const { nickname, profileColor, _id } = user || {};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConversationsRequest());
    },[]);
   // const { conversationItems, isFetching } = useSelector(state => conversationSelector(state));
    /*
    *   items: [
    *       {
    *           unreadMesages: int,
    *           messages: array [],
    *           _id: string,
    *           partner: {
    *               partnerId: string,
    *               nickname: string,
    *               profileColor: string,
    *               lastMessage: {
    *                   dataTime: data,
    *                   message: string,
    *                   _id: string
    *               }
    *           }
    *       }
    *   ]
    */
    const handleLogout = () => dispatch(logoutRequest({ _id }));
    
    const handleOpenCotactDrawer = () => dispatch(openDrawer(drawerNames.contactList));

    const handleOpenSearchCotactDrawer = () => dispatch(openDrawer(drawerNames.searchContact));
    
    const handleClickConversaionItem = conversation => dispatch(getCurrentConversationRequest(conversation));

    const handleDeleteConversationItem = () => {}
    
    return (
        <div className="actions-wrapper">
            <header className="header-container">
                <div className="header-info">
                    <UserInfoComponent
                        profile={{
                            label: nickname,
                            backgroundColor: profileColor,
                            width: "4rem",
                            height: "4rem",
                            fontSize: 32
                        }}
                        title={{
                            nickname: nickname,
                            fontSize: 18
                        }}
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
                    fontSize={20}
                />
            </div>
            <ConversationList
                onClickItem={handleClickConversaionItem}
                onDeleteItem={handleDeleteConversationItem}
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