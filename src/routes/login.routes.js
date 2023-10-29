import { Router } from "express";
import { ctrlGetLogin, ctrlPostLogin, ctrlPutLogin, ctrlDelLogin } from "../controllers/login.controllers.js";
import { loginErrorHandler } from "../error.handlers/login.error.js";
import { createLoginSchema } from "../models/schemas/login.schemas.js";
import { loginValidatorPost } from "../middlewares/login.validator.js";


const loginRouter = Router();

loginRouter.get('/', ctrlGetLogin, loginErrorHandler)

loginRouter.post('/', createLoginSchema, loginValidatorPost, ctrlPostLogin, loginErrorHandler)

loginRouter.put('/user', ctrlPutLogin, loginErrorHandler) 

loginRouter.delete('/user', ctrlDelLogin, loginErrorHandler)

export { loginRouter }