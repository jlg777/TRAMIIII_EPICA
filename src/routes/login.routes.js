import { Router } from "express";
import { ctrlGetLogin, ctrlPostLogin, ctrlGetLoginId, ctrlLoginId} from "../controllers/login.controllers.js";
import { loginErrorHandler } from "../error.handlers/login.error.js";
import { createLoginSchema } from "../models/schemas/login.schemas.js";
import { loginValidatorPost } from "../middlewares/login.validator.js";

const userRouter = Router();
const loginRouter = Router();

userRouter.get('/users', ctrlGetLogin, loginErrorHandler)

userRouter.get('/:logid', ctrlGetLoginId, loginErrorHandler)

loginRouter.post('/register', createLoginSchema, loginValidatorPost, ctrlPostLogin, loginErrorHandler)

loginRouter.post('/login', ctrlLoginId)

export { loginRouter };
export { userRouter };