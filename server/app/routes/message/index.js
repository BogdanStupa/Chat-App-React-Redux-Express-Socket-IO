import express from "express";
import {
    postMessage,
    getMessages,
    deleteMessage
} from "../../db/controllers/message";
import isAuth from "../../modules/middlewares";


const messageRouter = express.Router();

messageRouter.post("/secure/message", isAuth, postMessage);
messageRouter.get("/secure/message:id",isAuth, getMessages);
messageRouter.delete("/secure/message",isAuth, deleteMessage);

export default messageRouter;