import jwt from "jsonwebtoken";
import { userModel } from "../models/login-model.js";
import { env } from "../../settings/envs.js";

export const userValidator = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization){
        return res.sendStatus(401);
    }
    const token = authorization;
    const { id } = jwt.verify(token, env.SECRET_KEY);
    const user = userModel.findOne(id);
    console.log(user);
    next();
}