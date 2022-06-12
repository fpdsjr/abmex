import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import '../../container';

import morgan from 'morgan';

import { errorHandle } from './middleware';
import { matchRoutes } from './routes/match.routes';
import { teamRoute } from './routes/team.routes';
import { tournamentRoutes } from './routes/tournament.routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(teamRoute);

app.use(tournamentRoutes);

app.use(matchRoutes);

app.use(errorHandle);

export { app };
