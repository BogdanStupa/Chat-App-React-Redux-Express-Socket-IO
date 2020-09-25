import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const messageSchema = new mongoose.Schema({
    senderId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    receivedId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,
        default: ""
    },
    dateTime: {
        type: Date,
        required: true
    }
});

const MessageModel = new mongoose.model("Message", messageSchema);

export default MessageModel;