import express, { json } from 'express';
import cors from 'cors';
import { serverPort } from './utils/environment.js';
import router from './routes/router.js';
import dbConnectionMiddleware from './middlewares/dbConnectionMiddleware.js';

const app = express();
app.use(json());
app.use(cors());
app.use(dbConnectionMiddleware);
app.use(router);
app.listen(serverPort, () => { console.log(`server running at port ${serverPort}`); });