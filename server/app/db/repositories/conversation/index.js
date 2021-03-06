import ConversationModel from "../../models/conversation";


export const findConversationAndUpdate = (model, update) => ConversationModel
    .findOneAndUpdate(model, update, { upsert: true});

    
export const getConversationsOfUser = model => ConversationModel.find(model);

export const getConversationOfUser = model => ConversationModel.findOne(model);

export const findConversationAndDelete = model => ConversationModel.findOneAndDelete(model);
