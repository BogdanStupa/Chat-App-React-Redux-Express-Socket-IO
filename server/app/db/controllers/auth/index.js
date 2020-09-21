import addUser from "../../../db/repositories/auth";


export const postSignUp = async (req, res) => {
    console.log("IN SIGN UP");
    console.log(req.body);
    res.status(200).json({ok: true});
}

export const postSignIn = async (req, res) => {
    console.log("IN SIGN IN");
    console.log(req.body);
    res.status(200).json({ ok: true });
}