const {
    addUser
} = absoluteRequire("db/repositories/auth");

exports.postSignUp = async (req, res) => {
    console.log("IN SIGN UP");
    console.log(req.body);
    res.status(200).json({ok: true});
}

exports.postSignIn = async (req, res) => {
    console.log("IN SIGN IN");
    console.log(req.body);
    res.status(200).json({ ok: true });
}