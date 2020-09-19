const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


UserModel = new mongoose.model("User",userSchema);

exports.UserModel = UserModel;