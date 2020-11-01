import express from "express";
import { 
    postSignUp, 
    postSignIn,
    checkAllUsers,
    postRefreshUserToken,
    deleteRefreshToken
} from "../../db/controllers/auth";



const authRouter = express.Router();

authRouter.post("/auth/signup", postSignUp);
authRouter.post("/auth/signin", postSignIn);

authRouter.post("/auth/token", postRefreshUserToken);

authRouter.delete("/auth/logout/:_id/:refreshToken", deleteRefreshToken);


authRouter.get("/dev/auth", checkAllUsers);


export default authRouter;