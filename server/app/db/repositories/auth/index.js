import UserModel from "../../models/user";

export const addUser = model => {
    const user = UserModel({
        nickname: model.nickname,
        password: model.password,
        profileColor: model.profileColor
    });
    return user.save();
}

/* 
exports.findOneUser = (query, params) */