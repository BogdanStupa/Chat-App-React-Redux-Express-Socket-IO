import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrawerComponent } from "shared/components";
import { 
    InputSearchComponent,
    ContactSearchItemCart
 } from "entries/chat/components";
import {
    searchNewContactRequest,
    clearSearchBuffer
} from "redux/actions/contact";
import {
    closeDrawer
} from "redux/actions/drawer";
import {
    sendUpdateCurrentConversationRequest,
    getConversationsRequest
} from "redux/actions/conversation";
import { 
    isFetchingOfSearchongNewContactSelector,
    contactItemSearchedContactSelector,
    newConversationSelector,
    isDrawerOpenSelector
} from "selectors";


const DrawerComponentContainer = props => {
    const {
        drawerOption,
        inputOption,
        searchNewContact
    } = props;

    const isFetching = useSelector(state => isFetchingOfSearchongNewContactSelector(state));
    const contact = useSelector(state => contactItemSearchedContactSelector(state));
    const isOpen = useSelector(state => isDrawerOpenSelector(state, drawerOption.drawerName));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearSearchBuffer());
    },[isOpen]);
    

    const keyDown = value => {
        searchNewContact && dispatch(searchNewContactRequest({ nickname: value }));
    }

    const onClickItem = contactId => {
        dispatch(sendUpdateCurrentConversationRequest({ partnerId: contactId, unreadMessages: 0, makeChat: true }));
        dispatch(getConversationsRequest());
        dispatch(closeDrawer(drawerOption.drawerName));
    }


    return (
        <DrawerComponent {...drawerOption}>   
                <InputSearchComponent {...inputOption} keyDown={keyDown}/>
                {
                    searchNewContact && (
                        isFetching ? "loading" : (contact ? 
                            <ContactSearchItemCart 
                                profile={{
                                    label: contact.nickname,
                                    backgroundColor: contact.profileColor,
                                    width: 45,
                                    height: 45,
                                    fontSize: 25
                                }}
                                nickname={contact.nickname}
                                onClickItem={onClickItem}
                                contactId={contact._id}
                            /> : null)
                    ) 
                }
        </DrawerComponent>
    );
}

export default DrawerComponentContainer;