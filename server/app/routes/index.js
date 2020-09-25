import authRoute from "./auth";
import contactRoute from "./contact";

export default (app) => {
    app.use(authRoute);
    app.use(contactRoute);
}