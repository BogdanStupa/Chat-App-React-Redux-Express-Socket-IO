import authRoute from "./auth";

export default (app) => {
    app.use(authRoute);
}