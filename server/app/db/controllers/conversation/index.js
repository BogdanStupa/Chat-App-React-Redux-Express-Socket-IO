import constants from "../../../modules/constants";
import {
    findConversationAndUpdate,
    getConversationsOfUser,
    findConversationAndDelete
} from "../../repositories/conversation";
import {
    deleteUserMessage
} from "../../repositories/message";
import _ from "lodash";


/*
    req = {
        body: {
            _id,
            conversation
        }
    }
*/
export const updateConversation = async (req, res) => {
    try {
        const { 
            _id: partnerId,
            conversation
        } = req.body;
        const { _id: ownerId } = req.currentUser;

        await findConversationAndUpdate({ ownerId, partnerId }, { conversation });

        res.status(201).json({
            success: true
        });
    }catch (error){
        res.status(500)
                .json({
                    success: false,
                    errors: error.message
                });
    }
}   

/*
    req = {
        body: {
            _id
        }
    }
*/
export const getConversations = async (req, res) => {
    try{
        const { _id: ownerId } = req.currentUser;
        const conversation = await getConversationsOfUser({ ownerId }) || [];
        res.status(200)
            .json({
                success: true,
                conversation
            });
    } catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}   


/*
    req = {
        body: {
            _id
        }
    }
*/
export const deleteConversation = async (req, res) => {
    try{
        const { _id: partnerId } = req.body;
        const { _id: ownerId } = req.currentUser;

        const ownerConversation = await findConversationAndDelete({ ownerId, partnerId });
        const partnerConversation = await getConversationsOfUser({ ownerId, partnerId });

        const ownerMessages = ownerConversation ? ownerConversation.messages.map(item => String(item._id)) : [];
        const partnerMessages = partnerConversation ? partnerConversation.messages.map(item => String(item._id)) : [];


        await deleteUserMessage({
            _id: {
                $in: _.difference(ownerMessages,partnerMessages)
            }
        });

        res.status(204).send();
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}