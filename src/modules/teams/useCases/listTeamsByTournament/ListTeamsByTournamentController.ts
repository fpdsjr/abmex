import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTeamsByTournamentUseCase } from './ListTeamsByTournamentUseCase';

class ListTeamsByTournamentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const listTeamsByTournamentController = container.resolve(ListTeamsByTournamentUseCase);

    const listTeamsByTournament = await listTeamsByTournamentController.execute(id);

    return response.status(200).json(listTeamsByTournament);
  }
}

export { ListTeamsByTournamentController };
