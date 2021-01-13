import jwt from "jsonwebtoken";
import constants from "../constants";


const isAuth = (req, res, next) => {
    try{
        if(!req.headers.authorization){
            throw new Error(constants.VALIDATION_MESSAGES.NOT_FOUND_AUTHORIZATION);
        }
        const token = req.headers.authorization.split(" ")[1];

        if(token){
            try{
                const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                req.currentUser = decode;
                next();
                return;
            }catch(error){
                return res.status(401).send(constants.VALIDATION_MESSAGES.INVALID_TOKEN);
            }
        }
        res.status(403).send(constants.VALIDATION_MESSAGES.TOKEN_IS_NOT_SUPPLIED);
    }catch(error){
        res.status(500).send(error.message);
    }
}

export default isAuth;



