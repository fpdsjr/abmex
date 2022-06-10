import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTournamentByIdUseCase } from './listTournamentByIdUseCase';

class ListTournamentByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listTournamentByIdUseCase = container.resolve(
      ListTournamentByIdUseCase,
    );

    const listTournamentById = await listTournamentByIdUseCase.execute(id);

    return response.status(201).json(listTournamentById);
  }
}

export { ListTournamentByIdController };
