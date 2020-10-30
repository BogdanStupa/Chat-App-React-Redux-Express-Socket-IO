import { createSelector } from "reselect";

const getPartnerNickname = state => state.conversations.currentConversation.partnerNickname;
const getPartnerProfileColor = state => state.conversations.currentConversation.partnerProfileColor;

export const currentConversationProfileInfoSelector = createSelector(
    [getPartnerNickname,getPartnerProfileColor],
    (partnerNickname, partnerProfileColor) => {
        return {
            partnerNickname,
            partnerProfileColor
        }
    }
);