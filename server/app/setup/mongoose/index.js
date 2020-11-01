import mongoose from "mongoose";
import logger from "../../modules/winston";
import constants from "../../modules/constants";


export default () => {
    const URI =  constants.MONGOOSE.URL + constants.MONGOOSE.DB_CHAT;
    mongoose.connect(URI,{ 
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("connected", () => {
        logger.info("Mongoose chat: connected");
    });

    mongoose.connection.on("open", () => {
        logger.info("Mongoose chat: Connection is open");
    });

    mongoose.connection.on("reconnected", () => {
        logger.info("Mongoose chat: reconnecting");
    });

    mongoose.connection.on("disconnected", () => {
        logger.info("Mongoose chat: disconnect");
    });

    mongoose.connection.on("close", () => {
        logger.info("Mongoose chat: close seccessfully the connection");
    });

    mongoose.connection.on("error", (error) => {
        logger.error(`Mongoose chat: Error. ${error}`);
    });
}