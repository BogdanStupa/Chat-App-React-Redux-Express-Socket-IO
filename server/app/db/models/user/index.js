import mongoose from "mongoose";
import contactSchema from "../contact";

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileColor: {
        type: String,
        required: true
    },
    contacts: [
        {
            type: contactSchema
        }
    ]
});


const UserModel = new mongoose.model("User",userSchema);

export default UserModel;