import express from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import './shared/container';

import morgan from 'morgan';

import { errorHandle } from './shared/infra/http/middleware';
import { matchRoutes } from './shared/infra/http/routes/match.routes';
import { teamRoute } from './shared/infra/http/routes/team.routes';
import { tournamentRoutes } from './shared/infra/http/routes/tournament.routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(teamRoute);

app.use(tournamentRoutes);

app.use(matchRoutes);

app.use(errorHandle);

app.listen(3999, () => {
  console.log('App Running');
});
