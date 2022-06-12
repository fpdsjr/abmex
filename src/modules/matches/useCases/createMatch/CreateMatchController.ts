import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMatchUseCase } from './CreateMatchUseCase';

class CreateMatchController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { timeA, timeB, vencedor } = request.body;
    const createMatchUseCase = container.resolve(CreateMatchUseCase);

    const createMatch = await createMatchUseCase.execute({ timeA, timeB, vencedor, campeonatoId: id });

    return response.status(200).json(createMatch);
  }
}

export { CreateMatchController };
