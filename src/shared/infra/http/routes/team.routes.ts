import { CreateTeamController } from '~/modules/teams/useCases/createTeam/CreateTeamController';
import { DeleteTeamController } from '~/modules/teams/useCases/deleteTeam/DeleteTeamController';
import { FindTeamByIdController } from '~/modules/teams/useCases/findTeamById/FindTeamByIdController';
import { ListAllTeamsController } from '~/modules/teams/useCases/listAllTeams/ListAllTeamsController';
import { ListTeamsByTournamentController } from '~/modules/teams/useCases/listTeamsByTournament/ListTeamsByTournamentController';
import { UpdateTeamController } from '~/modules/teams/useCases/updateTeam/UpdateTeamController';
import { Router } from 'express';

const teamRoute = Router();

const createTeamController = new CreateTeamController();
const updateTeamController = new UpdateTeamController();
const listAllTeams = new ListAllTeamsController();
const findTeamById = new FindTeamByIdController();
const listTeamsByTournamentController = new ListTeamsByTournamentController();
const deleteTeamController = new DeleteTeamController();

teamRoute.post('/team/create/:id', createTeamController.handle);

teamRoute.put('/team/update/:id', updateTeamController.handle);

teamRoute.get('/team/listall/', listAllTeams.handle);

teamRoute.get('/team/:id', findTeamById.handle);

teamRoute.delete('/team/delete/:id', deleteTeamController.handle);

teamRoute.get('/team/tournament/:id', listTeamsByTournamentController.handle);

export { teamRoute };
