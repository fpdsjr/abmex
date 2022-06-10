import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllTournamentUseCase } from './ListAllTournamentUseCase';

class ListAllTournamentController {
  async handle(request: Request, response: Response) {
    const listAllTournamentUseCase = container.resolve(
      ListAllTournamentUseCase,
    );

    const listAllTournament = await listAllTournamentUseCase.execute();

    return response.status(200).json(listAllTournament);
  }
}

export { ListAllTournamentController };
