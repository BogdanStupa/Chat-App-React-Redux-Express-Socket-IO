import express from "express";
import isAuth from "../../modules/middlewares";
import {
    updateConversation,
    deleteConversation,
    getConversations
} from "../../db/controllers/conversation";


const conversationRouter = express.Router();

conversationRouter.put("/secure/conversation", isAuth, updateConversation);
conversationRouter.get("/secure/conversation", isAuth, getConversations);
conversationRouter.delete("/secure/conversation", isAuth, deleteConversation);


export default conversationRouter;