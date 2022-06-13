import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import '../../container';

import morgan from 'morgan';

import { errorHandle } from './middleware';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(routes);

app.use(errorHandle);

export { app };
