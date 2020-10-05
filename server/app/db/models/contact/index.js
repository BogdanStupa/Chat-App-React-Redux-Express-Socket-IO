import mongoose from "mongoose";
const {
    ObjectId
} = mongoose.Schema.Types;


const contactSchema = new mongoose.Schema({
    contactUserId: {
        type: ObjectId,
        required: true
    },
    conversationId: {
        type: ObjectId,
        ref: "Conversation"
    },
    isFriend: {
        type: Boolean,
        default: false
    }
});

export default contactSchema;