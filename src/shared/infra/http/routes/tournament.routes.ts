import { Router } from 'express';

import { CreateTournamentController } from '../../../../modules/tournaments/useCases/createTournament/CreateTournamentController';
import { ListAllTournamentController } from '../../../../modules/tournaments/useCases/listAllTournament/ListAllTournamentController';
import { ListTournamentByIdController } from '../../../../modules/tournaments/useCases/listTournamentById/listTournamentByIdController';

const tournamentRoutes = Router();

const createTournamentController = new CreateTournamentController();
const listAllTournamentController = new ListAllTournamentController();
const listTournamentByIdController = new ListTournamentByIdController();

tournamentRoutes.post('/tournament/create', createTournamentController.handle);

tournamentRoutes.get(
  '/tournament/list/:id',
  listTournamentByIdController.handle,
);

tournamentRoutes.get('/tournament/listall', listAllTournamentController.handle);

export { tournamentRoutes };
