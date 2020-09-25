import express from "express";
import { 
    postSignUp, 
    postSignIn,
    checkAllUsers
} from "../../db/controllers/auth";



const authRouter = express.Router();

authRouter.post("/auth/signup", postSignUp);
authRouter.post("/auth/signin", postSignIn);
authRouter.get("/dev/auth", checkAllUsers);


export default authRouter;