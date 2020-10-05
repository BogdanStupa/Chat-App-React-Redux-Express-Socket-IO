import moment from "moment";
import { 
    findConversationAndUpdate,
    getConversationsOfUser
} from "../../repositories/conversation";
import { 
    addMessage,
    getUserMessage,
    deleteUserMessage
 } from "../../repositories/message";


/*
    req = {
        body: {
            _id,
            message
        }
    }
*/
export const postMessage = async (req, res) => {
    try {
        const { 
            _id: receivedId,
            message
         } = req.body;
        const { _id: senderId } = req.currentUser;
       
        const model = {
            senderId,
            receivedId,
            message,
            dateTime: moment.utc().toDate()
        };

        const resultAddMessage = await addMessage(model); 
 
        await findConversationAndUpdate({
                ownerId: senderId,
                partnerId: receivedId,
            },{
                ownerId: senderId,
                partnerId: receivedId,
                $inc: { 
                    numberOfMessages: 1
                },
                $addToSet: {
                    messages: resultAddMessage._id
                }
            }
        );
        
        await findConversationAndUpdate({
                ownerId: receivedId,
                partnerId: senderId,
            },{
                ownerId: receivedId,
                partnerId: senderId,
                $inc: { 
                    numberOfMessages: 1,
                    unreadMessages: 1
                },
                $addToSet: {
                    messages: resultAddMessage._id
                }
            }
        );

        res.status(200)
            .json({
                success: true
            });

    }catch(error){
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
export const getMessages = async (req, res) => {
    try {
        const { _id: partnerId } = req.body;
        const { _id: ownerId } = req.currentUser;

        const messagesInConversation = await getConversationsOfUser({ ownerId, partnerId });
        
        const { messages: messagesId } = messagesInConversation;
        
        const userMessages = [];
        
        for(const id of messagesId){
            const message = await getUserMessage({ _id: id });
            userMessages.push(message);
        }

        res.status(200)
            .json({
                status: true,
                messages: userMessages
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
            _id,     
            messageId
        }
    }
*/
export const deleteMessage = async (req, res) => {
    try {
        const { _id: partnerId, messageId }  = req.body;
        const { _id: ownerId } = req.currentUser;

        await findConversationAndUpdate({
                ownerId, 
                partnerId
            },{
                $pull: {
                    messages: messageId
                }
            }
        );

        const partnerConversation = await getConversationsOfUser({
            ownerId,
            partnerId
        });

        if(partnerConversation && partnerConversation._id){
            const message = partnerConversation.messages.find(
                item => String(item._id) === String(messageId)
            );   
            if(!message){
                await deleteUserMessage({_id: messageId });
            }
        }
        res.status(204).send();

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}