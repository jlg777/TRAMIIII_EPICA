import { Router } from "express";


const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.send('Hello World!')
  })

export { loginRouter }