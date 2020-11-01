import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import socketIO from "socket.io";

import constants from "../../modules/constants";
import logger from "../../modules/winston";
import expressRoutes from "../../routes"; 


require("dotenv").config();

export default (app) => {
    const server = http.createServer(app);
    const port = process.env.PORT || constants.GENERAL.SERVER_HTTP_PORT;
    const httpId = process.env.IP || constants.GENERAL.SERVER_HTTP_IP;

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());   
    
    expressRoutes(app);

    global.io = socketIO(server);

    global.io.on("connection", (socket) => {
        console.log("New client connected", socket.id);

        socket.on("start-chat", userId => {
            console.log("USER_ID", userId);
            socket.join(`${userId}`);
        });

        socket.on("disconnect",() =>{
            console.log("Client disconnected");
        });
    }); 

    server.listen(port, () => {
        logger.info(`HTTP Server: Listering on http://${httpId}:${port}`);
    });


    return server;
}