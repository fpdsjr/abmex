import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/teams/useCases/createTeam/CreateTeamController';
import { UpdateTeamController } from '../../../../modules/teams/useCases/updateTeam/UpdateTeamController';

const teamRoute = Router();

const createTeamController = new CreateTeamController();
const updateTeamController = new UpdateTeamController();

teamRoute.post('/team/create/:id', createTeamController.handle);

teamRoute.post('/team/update/:id', updateTeamController.handle);

export { teamRoute };
