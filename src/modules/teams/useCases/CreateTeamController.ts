import { Request, response, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTeamUseCase } from './CreateTeamUseCase';

class CreateTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, iniciais } = request.body;

    const createTeamUseCase = container.resolve(CreateTeamUseCase);

    const createTeam = await createTeamUseCase.execute({ id, nome, iniciais });

    return response.status(200).json(createTeam);
  }
}

export { CreateTeamController };
