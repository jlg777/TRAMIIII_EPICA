import { Router } from "express";
import { ctrlGetLogin, ctrlPostLogin, ctrlPutLogin, ctrlDelLogin } from "../controllers/login.controllers.js";


const loginRouter = Router();

loginRouter.get('/', ctrlGetLogin)

loginRouter.post('/', ctrlPostLogin)

loginRouter.put('/user', ctrlPutLogin) 

loginRouter.delete('/user', ctrlDelLogin)

export { loginRouter }