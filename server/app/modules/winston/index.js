import winston from "winston";
import constants from "../constants";

export default winston.createLogger({
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename: constants.WINSTON.LOG_FILE,
            timestamp: true
        })
    ],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
    )
});