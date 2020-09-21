import UserModel from "../../models/user";

export const addUser = model => {
    const user = UserModel({
        nickname: model.nickname,
        password: model.password
    });
    return user.save();
}
 
export const findOneUser = (model) => UserModel.findOne(model);

export const getAllUsers = () => UserModel.find();