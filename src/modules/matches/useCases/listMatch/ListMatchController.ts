import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMatchUseCase } from './ListMatchUseCase';

class ListMatchController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const listMatchUseCase = container.resolve(ListMatchUseCase);

    const listMatch = await listMatchUseCase.handle(id);

    return response.status(200).json(listMatch);
  }
}

export { ListMatchController };
