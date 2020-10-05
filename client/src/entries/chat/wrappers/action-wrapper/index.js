import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
    IconComponent
} from "shared/components";
import constants from "modules/constants";
import {
    getUser,
    logout
} from "modules/utils";


const ActionWrapper = props => {
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if(!isAuth){
            props.history.push("/signin");
        }
    },[isAuth]);
    const handleLogout = () => logout();
    
    const { nickname, profileColor } = getUser() || {}

    return (
        <div className="action-wrapper">
            <header className="header-container">
                <div className="header-info">
                    <UserInfoComponent
                        nickname={nickname}
                        profileColor={profileColor}
                    />
                </div>
                
                <div className="header-actions">
                    <ButtonComponent 
                        width="2rem"
                        height="2rem"
                        link
                    >
                        <IconComponent
                            fill="#555657"
                            icon="account-plus"
                            width="1.5rem"
                            height="1.5rem"
                        />
                    </ButtonComponent>
                    <ButtonComponent 
                        width="2rem"
                        height="2rem"
                        link
                    >
                        <IconComponent
                            fill="#555657"
                            icon="message-text"
                            width="1.5rem"
                            height="1.5rem"
                        />
                    </ButtonComponent>

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

            
        </div>
    )
}

export default ActionWrapper;