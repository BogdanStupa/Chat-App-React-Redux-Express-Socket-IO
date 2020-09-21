import mongoose from "mongoose";
import logger from "../../modules/winston";
import constants from "../../modules/constants";


export default () => {
    const URI =  constants.MONGOOSE.URL + constants.MONGOOSE.DB;
    mongoose.connect(URI,{ 
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on("connected", () => {
        logger.info("Mongoose: connected");
    });

    mongoose.connection.on("open", () => {
        logger.info("Mongoose: Connection is open");
    });

    mongoose.connection.on("reconnected", () => {
        logger.info("Mongoose: reconnecting");
    });

    mongoose.connection.on("disconnected", () => {
        logger.info("Mongoose: disconnect");
    });

    mongoose.connection.on("close", () => {
        logger.info("Mongoose: close seccessfully the connection");
    });

    mongoose.connection.on("error", (error) => {
        logger.error(`Mongoose: Error. ${error}`);
    });
}