import { createSelector } from "reselect";


const getIsFetchingOfConversations = state => state.conversations.isFetching;
const getConversationItem = (state, conversationId) => state.conversations.conversationItemsArray[conversationId];
const getConversationItems = (state) => state.conversations.conversationItemsArray;
const getIdConversations = state => state.conversations.idConversations;
const getCurrentConversation = state => state.conversations.currentConversation;
const getCurrentConversationItem = (state, item) => state.conversations.currentConversation[item];

export const isFetchingOfConversationsSelector = createSelector(
    [getIsFetchingOfConversations],
    res => res
);
export const conversationItemSelector = createSelector(
    [getConversationItem],
    res => res
);
export const idConversationsSelector = createSelector(
    [getIdConversations],
    res => res
);  
export const currentConversation = createSelector(
    [getCurrentConversation],
    res => res
);
export const currentConversationItemSelector = createSelector(
    [getCurrentConversationItem],
    res => res
);

export const conversationItemsSelector = createSelector(
    [getConversationItems],
    res => res
);


const getIsSendingMessage = state => state.message.isSendingMessage

export const isSendingMessageSelector = createSelector(
    [getIsSendingMessage],
    res => res
);


const getUnreadMessages = (state, conversationId) => state.conversations.conversationItemsArray[conversationId].unreadMessages;

export const unreadMessagesSelector = createSelector(
    [getUnreadMessages],
    res => res
);

