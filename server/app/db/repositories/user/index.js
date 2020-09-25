import { query } from "express";
import UserModel from "../../models/user";

export const addUser = model => {
    const user = UserModel({
        nickname: model.nickname,
        password: model.password,
        profileColor: model.profileColor
    });
    return user.save();
}
 
export const findOneUser = (model) => UserModel.findOne(model);

export const getAllUsers = () => UserModel.find();

export const findUser = (model, params) => UserModel.find(model, params);

export const findUserByIdAndUpdate = (_id, update) => UserModel.findByIdAndUpdate(_id, update);

export const findUserById = (_id) => UserModel.findById(_id);

