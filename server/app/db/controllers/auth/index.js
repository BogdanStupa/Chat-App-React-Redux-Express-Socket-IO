const {
    addUser
} = absoluteRequire("db/repositories/auth");

exports.postSignUp = async (req, res) => {
    console.log(req.body);
    res.status(200);
}

exports.postSignIn = async (req, res) => {
    console.log(req.body);
    res.status(200);
}