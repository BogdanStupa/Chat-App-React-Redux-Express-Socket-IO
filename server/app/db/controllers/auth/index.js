import {
    addUser,
    findOneUser,
    getAllUsers
} from "../../../db/repositories/auth";
import bcrypt from "bcrypt";
import constants from "../../../modules/constants";
import { createJwtToken } from "../../../modules/utils";


export const postSignUp = async (req, res) => {
    const {
        nickname,
        password
    } = req.body;
    try {
        const user = findOneUser({
            nickname: nickname
        });
        if(!user._id){
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = await addUser({
                nickname: nickname,
                password: hashedPassword
            });
            if(newUser){
                res.status(200).json({
                    success: true,
                    user: newUser,
                    token:createJwtToken({
                        nickname,
                        id: newUser._id
                    })
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
                error: constants.VALIDATION_MESSAGES.USER_ALREADY_EXIST
            });
        }
    } catch(error){
        res.status(500).json({
            success: false,
            errors: error.message
        });
    } 
}


export const postSignIn = async (req, res) => {
    const {
        nickname,
        password
    } = req.body;
    try {
        const user = await findOneUser({
            nickname: nickname
        });
        if(user._id && await bcrypt.compare(password, user.password)){
            res.status(200).send({
                success: true,
                errors: {},
                token: createJwtToken({
                    nickname,
                    id: user._id
                }),
                user: user
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



export function authenticateToken(req, res, next){

}


export const checkAllUsers = async (req, res) => {
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
    }catch(e){
        res.status(500);
    }
}