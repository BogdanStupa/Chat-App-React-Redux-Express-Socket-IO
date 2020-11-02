import express from "express";
import {
    postAddContact,
    deleteContact,
    getContact
} from "../../db/controllers/contact";
import isAuth from "../../modules/middlewares";


const contactRouter = express.Router();

contactRouter.post("/secure/contact",isAuth,postAddContact);
contactRouter.delete("/secure/contact",isAuth, deleteContact);
contactRouter.get("/secure/contact/:nickname",isAuth, getContact);



export default contactRouter;