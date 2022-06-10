import 'reflect-metadata';
import express from 'express';
import './shared/container';

import { teamRoute } from './shared/infra/http/routes/team.routes';
import { tournamentRoutes } from './shared/infra/http/routes/tournament.routes';

const app = express();

app.use(express.json());

app.use(teamRoute);

app.use(tournamentRoutes);

app.listen(3999, () => {
  console.log('App Running');
});
