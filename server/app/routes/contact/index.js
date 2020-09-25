import express from "express";
import {
    postAddContact,
    deleteContact,
    getContacts
} from "../../db/controllers/contact";
import isAuth from "../../modules/middlewares";


const contactRouter = express.Router();

contactRouter.post("/secure/contact",isAuth,postAddContact);
contactRouter.delete("/secure/contact",isAuth, deleteContact);
contactRouter.get("/secure/contact",isAuth, getContacts);



export default contactRouter;