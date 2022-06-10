import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTeamByIdUseCase } from './FindTeamByIdUseCase';

class FindTeamByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findTeamByIdUseCase = container.resolve(FindTeamByIdUseCase);

    const findTeamById = await findTeamByIdUseCase.execute(id);

    return response.status(200).json(findTeamById);
  }
}

export { FindTeamByIdController };
