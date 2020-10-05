import {
    addUser,
    findOneUser,
    getAllUsers
} from "../../../db/repositories/user";
import bcrypt from "bcrypt";
import constants from "../../../modules/constants";
import { createJwtToken } from "../../../modules/utils";
import randomColor  from "../../../modules/random-color"; 


/*
    req = {
        body: {
            nickname,
            password
        }
    }
*/
export const postSignUp = async (req, res) => {
    try {
        const {
            nickname,
            password
        } = req.body;
        
        const user = await findOneUser({
            nickname: nickname
        });
        if(!user || !user._id || typeof user._id === "undefined"){
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = await addUser({
                nickname: nickname,
                password: hashedPassword,
                profileColor: randomColor()
            });
            const token =  createJwtToken({
                    nickname,
                    _id: newUser._id
                });
            if(newUser){
                res.status(200).json({
                    success: true,
                    errors: {},
                    token: `Bearer ${token}`,
                    user: { 
                        nickname: newUser.nickname,
                        _id: newUser._id,
                        profileColor: newUser.profileColor
                    }
                });
            }else{
                res.status(401).json({
                    success: false,
                    errors: constants.VALIDATION_MESSAGES.INVALID_USER_DATA
                });
            }
        }else{
            res.status(401).json({
                success: false,
                errors: constants.VALIDATION_MESSAGES.USER_ALREADY_EXIST
            });
        }
    } catch(error){
        res.status(500).json({
            success: false,
            errors: error.message
        });
    } 
}

/*
    req = {
        body: {
            nickname,
            password
        }
    }
*/
export const postSignIn = async (req, res) => {
    try {
        const {
            nickname,
            password
        } = req.body;

        const user = await findOneUser({
            nickname: nickname
        });
        if(!user){
            throw new Error(constants.VALIDATION_MESSAGES.SUCH_USER_DOESNT_EXIST);
        }
        if(user._id && await bcrypt.compare(password, user.password)){
            const token =  createJwtToken({
                nickname,
                _id: user._id
            });
            res.status(200).send({
                success: true,
                errors: {},
                token: `Bearer ${token}`,
                user: {
                    nickname: user.nickname,
                    _id: user._id,
                    profileColor: user.profileColor
                }
            });
        }else{
            res.status(401).json({
                success: false,
                errors: constants.VALIDATION_MESSAGES.INCORRECT_PASSWORD
            });
        }
    } catch(error){
        res.status(500).send({
            success: false,
            errors: error.message
        });
    } 
}


export const checkAllUsers = async (req, res) => {
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
    }catch(e){
        res.status(500);
    }
}