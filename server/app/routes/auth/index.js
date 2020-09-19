const express = require("express");
const {
    postSignIn,
    postSignUp
}  =  absoluteRequire("db/controllers/auth");

const authRouter = express.Router();

authRouter.post("/auth/signup", postSignUp);
authRouter.post("/auth/signin", postSignIn);

module.exports = authRouter;