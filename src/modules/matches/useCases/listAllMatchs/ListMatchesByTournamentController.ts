import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMatchesByTournamentUseCase } from './ListMatchesByTournamentUseCase';

class ListMatchesByTournamentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listMatchesByTournamentUseCase = container.resolve(ListMatchesByTournamentUseCase);

    const listAllMatches = await listMatchesByTournamentUseCase.execute(id);

    return response.status(200).json(listAllMatches);
  }
}

export { ListMatchesByTournamentController };
