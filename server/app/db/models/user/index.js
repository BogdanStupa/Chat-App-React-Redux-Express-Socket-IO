import mongoose from "mongoose";


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
            contactUserId:{
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        }
    ]
});


const UserModel = new mongoose.model("User",userSchema);

export default UserModel;