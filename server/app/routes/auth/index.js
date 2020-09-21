import express from "express";
import { 
    postSignUp, 
    postSignIn
} from "../../db/controllers/auth";


const authRouter = express.Router();

authRouter.post("/auth/signup", postSignUp);
authRouter.post("/auth/signin", postSignIn);

export default authRouter;