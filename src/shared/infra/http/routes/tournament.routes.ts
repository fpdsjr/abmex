import { CreateTournamentController } from '~/modules/tournaments/useCases/createTournament/CreateTournamentController';
import { ListAllTournamentController } from '~/modules/tournaments/useCases/listAllTournament/ListAllTournamentController';
import { FindTournamentByIdController } from '~/modules/tournaments/useCases/listTournamentById/FindTournamentByIdController';
import { StartTournamentController } from '~/modules/tournaments/useCases/startTournament/StartTournamentController';
import { UpdateTournamentController } from '~/modules/tournaments/useCases/updateTournament/UpdateTournamentController';
import { Router } from 'express';

const tournamentRoutes = Router();

const createTournamentController = new CreateTournamentController();
const listAllTournamentController = new ListAllTournamentController();
const findTournamentByIdController = new FindTournamentByIdController();
const updateTournamentController = new UpdateTournamentController();
const startTournamentController = new StartTournamentController();

tournamentRoutes.post('/tournament/create', createTournamentController.handle);

tournamentRoutes.get('/tournament/find/:id', findTournamentByIdController.handle);

tournamentRoutes.put('/tournament/update/:id', updateTournamentController.handle);

tournamentRoutes.get('/tournament/listall', listAllTournamentController.handle);

tournamentRoutes.patch('/tournament/start/:id', startTournamentController.handle);

export { tournamentRoutes };
