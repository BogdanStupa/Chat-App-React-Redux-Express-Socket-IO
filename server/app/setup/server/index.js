const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const constants = absoluteRequire("modules/constants");
const logger = absoluteRequire("modules/winston");
const expressRoutes = absoluteRequire("routes"); 


require("dotenv").config();

module.exports = (app) => {
    const server = http.createServer(app);
    const port = process.env.PORT || constants.GENERAL.SERVER_HTTP_PORT;
    const httpId = process.env.IP || constants.GENERAL.SERVER_HTTP_IP;

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());   
    
    expressRoutes(app);

    app.get("/", (req, res) => {
        res.end("test app");
    });

    app.post("/test", (req, res) => {
        console.log(req.headers);
        res.send();
    });

    server.listen(port, () => {
        logger.info(`HTTP Server: Listering on http://${httpId}:${port}`);
    });



    return server;
}