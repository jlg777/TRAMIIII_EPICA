import express from 'express';
import { loginRouter } from './src/routes/login.routes.js';

const app = express();
const port = 3000;

//midleware
app.use(express.json());

app.use('/', loginRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})