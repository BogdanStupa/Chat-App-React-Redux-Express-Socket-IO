import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const conversationSchema = new mongoose.Schema({
    ownerId: {
        type: ObjectId,
        required: true
    },
    partnerId: {
        type: ObjectId,
        required: true
    },
    unreadMessages: {
        type: Number,
        required: true,
        default: 0
    },
    messages: [
        {
            type: ObjectId,
            ref: "Message"
        }
    ]
});

const ConversationModel = mongoose.model("Conversation", conversationSchema);

export default ConversationModel;