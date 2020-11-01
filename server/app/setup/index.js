import setupServer from "./server";
import setupMongooseChat from "./mongoose";


export default (app) => {
    setupServer(app);
    setupMongooseChat();
}