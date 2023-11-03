import express from 'express';
import { loginRouter, userRouter } from './src/routes/login.routes.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
//import morgan from 'morgan'; // configuracion 'dev' devuelve llamadas http con info
//import  cors  from 'cors'; // comunicacion de distintos servidores
//import  helmet  from 'helmet'; // protege las llamadas htttp de sitios o de scrpits
import { env } from "./settings/envs.js";
import { userValidator } from './src/middlewares/user.validator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = env.PORT;

//midleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "src", "public")));

app.use('/users', userRouter);
app.use('/userlogin', userValidator, userRouter);
app.use('/user', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});