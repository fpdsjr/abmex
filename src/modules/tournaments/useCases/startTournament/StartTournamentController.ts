import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { StartTournamentUseCase } from './StartTournamentUseCase';

class StartTournamentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const startTournamentUseCase = container.resolve(StartTournamentUseCase);

    const startTournament = await startTournamentUseCase.execute(id);

    return response.status(200).json(startTournament);
  }
}

export { StartTournamentController };
