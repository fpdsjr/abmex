import { CreateMatchController } from '~/modules/matches/useCases/createMatch/CreateMatchController';
import { ListMatchesByTournamentController } from '~/modules/matches/useCases/listAllMatchs/ListMatchesByTournamentController';
import { ListMatchController } from '~/modules/matches/useCases/listMatch/ListMatchController';
import { Router } from 'express';

const matchRoutes = Router();

const createMatchController = new CreateMatchController();
const listMatchesByTournamentController = new ListMatchesByTournamentController();
const listMatchController = new ListMatchController();

matchRoutes.post('/match/create/:id', createMatchController.handle);

matchRoutes.get('/match/listmatches/:id', listMatchesByTournamentController.handle);

matchRoutes.get('/match/listmatch/:id', listMatchController.handle);

export { matchRoutes };
