import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTeamUseCase } from './DeleteTeamUseCase';

class DeleteTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteTeamUseCase = container.resolve(DeleteTeamUseCase);

    const deleteTeam = await deleteTeamUseCase.execute(id);

    return response.status(200).json(deleteTeam);
  }
}

export { DeleteTeamController };
