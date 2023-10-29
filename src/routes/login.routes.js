import { Router } from "express";
import { ctrlGetLogin, ctrlPostLogin, ctrlPutLogin, ctrlDelLogin } from "../controllers/login.controllers.js";
import { loginErrorHandler } from "../errorHandler/login.error.js";


const loginRouter = Router();

loginRouter.get('/', ctrlGetLogin, loginErrorHandler)

loginRouter.post('/', ctrlPostLogin, loginErrorHandler)

loginRouter.put('/user', ctrlPutLogin, loginErrorHandler) 

loginRouter.delete('/user', ctrlDelLogin, loginErrorHandler)

export { loginRouter }