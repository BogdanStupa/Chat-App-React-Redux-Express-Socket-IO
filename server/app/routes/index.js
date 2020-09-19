const authRoute = absoluteRequire("routes/auth");

module.exports = (app) => {
    app.use(authRoute);
}