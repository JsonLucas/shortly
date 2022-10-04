import express, { json } from 'express';
import 'express-async-errors';
import { errorHandler } from '../middlewares/errors';
import cors from 'cors';
import router from '../routes/router';

export const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);