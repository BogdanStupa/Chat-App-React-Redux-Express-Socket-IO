import setupServer from "./server";
import setupMongoose from "./mongoose";


export default (app) => {
    setupServer(app);
    setupMongoose();
}