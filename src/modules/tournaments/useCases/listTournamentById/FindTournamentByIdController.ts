import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTournamentByIdUseCase } from './FindTournamentByIdUseCase';

class FindTournamentByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findTournamentByIdUseCase = container.resolve(FindTournamentByIdUseCase);

    const findTournamentById = await findTournamentByIdUseCase.execute(id);

    return response.status(201).json(findTournamentById);
  }
}

export { FindTournamentByIdController };
