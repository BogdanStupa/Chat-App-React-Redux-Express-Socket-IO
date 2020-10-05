import authRouter from "./auth";
import contactRouter from "./contact";
import conversationRouter from "./conversation";
import messageRouter from "./message";

export default (app) => {
    app.use(authRouter);
    app.use(contactRouter);
    app.use(conversationRouter);
    app.use(messageRouter);
}