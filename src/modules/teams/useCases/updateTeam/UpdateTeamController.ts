import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTeamUseCase } from './UpdateTeamUseCase';

class UpdateTeamController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, iniciais } = request.body;

    const updateTeamUseCase = container.resolve(UpdateTeamUseCase);

    const updateTeam = await updateTeamUseCase.execute({ id, nome, iniciais });

    return response.status(200).json(updateTeam);
  }
}

export { UpdateTeamController };
