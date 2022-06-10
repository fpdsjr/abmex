import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTournamentUseCase } from './UpdateTournamentUseCase';

class UpdateTournamentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, descricao, premiacao } = request.body;
    const updateTournamentUseCase = container.resolve(UpdateTournamentUseCase);

    const updateTournament = await updateTournamentUseCase.execute({
      id,
      nome,
      descricao,
      premiacao,
    });

    return response.status(200).json(updateTournament);
  }
}

export { UpdateTournamentController };
