import {
    addUser,
    findOneUser,
    getAllUsers,
    findUserById,
    findUserByIdAndUpdate
} from "../../../db/repositories/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

            if(newUser){
                res.sendStatus(201);
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
        const user = await findOneUser({ nickname });

        if(!user){
            throw new Error(constants.VALIDATION_MESSAGES.SUCH_USER_DOESNT_EXIST);
        }
        if(user._id && await bcrypt.compare(password, user.password)){
            const accessToken =  createJwtToken({
                nickname,
                _id: user._id
            });
            const refreshToken = jwt.sign({
                nickname,
                _id: user._id
            }, process.env.REFRESH_TOKEN_SECRET);

            //push refresh token in database 
            await findUserByIdAndUpdate(user._id, 
                { 
                    $push: {
                        refreshTokens: refreshToken
                    } 
                }
            );
            
            res.status(200).send({
                success: true,
                errors: {},
                token: `Bearer ${accessToken}`,
                refreshToken: `Bearer ${refreshToken}`,
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


export const postRefreshUserToken = async (req, res) => {
    try{
        const { refreshToken, _id } = req.body;
        
        if(!refreshToken) return res.sendStatus(401);

        const token = refreshToken.split(" ")[1];

        const { refreshTokens } = await findUserById(_id);
        
        if(!refreshTokens.includes(token))return res.sendStatus(403);
        
        try{
            const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
            const accessToken = createJwtToken({ 
                nickname: decode.nickname,
                _id: decode._id
             });
             return res.status(201).json({ token: `Bearer ${accessToken}` });
        }catch(error){
            return res.sendStatus(403);
        }

    }catch(error){
        res.sendStatus(500);
    }
}


export const deleteRefreshToken = async (req, res) => {
    try {
        const { refreshToken, _id } = req.params;

        const token = refreshToken.split(" ")[1];

        const user = await findUserByIdAndUpdate(_id,
            {
                $pull: {
                    refreshTokens: token
                }
            }
        );

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
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