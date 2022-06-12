import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTournamentUseCase } from './CreateTournamentUseCase';

class CreateTournamentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao, premiacao } = request.body;

    const createTournamentUseCase = container.resolve(CreateTournamentUseCase);

    const createTournament = await createTournamentUseCase.execute({
      nome,
      descricao,
      premiacao,
    });

    return response.status(201).json(createTournament);
  }
}

export { CreateTournamentController };
