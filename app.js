import express from 'express';
import { loginRouter } from './src/routes/login.routes.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
//import morgan from 'morgan';
//import  cors  from 'cors';
//import  helmet  from 'helmet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//midleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "src", "public")));

app.use('/', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});