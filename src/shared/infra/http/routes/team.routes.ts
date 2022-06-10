import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/teams/useCases/createTeam/CreateTeamController';

const teamRoute = Router();

const createTeamController = new CreateTeamController();

teamRoute.post('/create/team/:id', createTeamController.handle);

export { teamRoute };
