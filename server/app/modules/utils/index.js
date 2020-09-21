import jwt from "jsonwebtoken";

export const createJwtToken = model => jwt.sign(model,process.env.ACCESS_TOKEN_SECRET);