import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/teams/useCases/createTeam/CreateTeamController';
import { ListAllTeamsController } from '../../../../modules/teams/useCases/listAllTeams/ListAllTeamsController';
import { UpdateTeamController } from '../../../../modules/teams/useCases/updateTeam/UpdateTeamController';

const teamRoute = Router();

const createTeamController = new CreateTeamController();
const updateTeamController = new UpdateTeamController();
const listAllTeams = new ListAllTeamsController();

teamRoute.post('/team/create/:id', createTeamController.handle);

teamRoute.post('/team/update/:id', updateTeamController.handle);

teamRoute.get('/team/listall/', listAllTeams.handle);

export { teamRoute };
