import { Router } from 'express';

import { matchRoutes } from './match.routes';
import { teamRoute } from './team.routes';
import { tournamentRoutes } from './tournament.routes';

const routes = Router();

routes.use(matchRoutes);

routes.use(teamRoute);

routes.use(tournamentRoutes);

export { routes };
