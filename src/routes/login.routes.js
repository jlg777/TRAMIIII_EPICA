import { Router } from "express";
import { ctrlGetLogin, ctrlPostLogin, ctrlGetLoginId, ctrlLoginId} from "../controllers/login.controllers.js";
import { loginErrorHandler } from "../error.handlers/login.error.js";
import { createLoginSchema } from "../models/schemas/login.schemas.js";
import { loginValidatorPost } from "../middlewares/login.validator.js";


const loginRouter = Router();

loginRouter.get('/', ctrlGetLogin, loginErrorHandler)

loginRouter.get('/:logid', ctrlGetLoginId, loginErrorHandler)

loginRouter.post('/', createLoginSchema, loginValidatorPost, ctrlPostLogin, loginErrorHandler)

loginRouter.post('/user', ctrlLoginId)

export { loginRouter }