import { Router } from "express";
import { ctrlCreateUser, ctrlGetUserId, ctrlGetuser } from "../controllers/user.controllers.js";


const userRouter = Router();

userRouter.get("/:userId", ctrlGetUserId);
userRouter.get("/", ctrlGetuser);
userRouter.post("/", ctrlCreateUser);

export { userRouter };