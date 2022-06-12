import { inject, injectable } from 'tsyringe';

import { ICreateMatchDTO } from '../../dtos/ICreateMatchDTO';
import { IMatchRepository } from '../../infra/repositories/IMatchRepository';

@injectable()
class CreateMatchUseCase {
  constructor(
    @inject('MatchRepository')
    private matchRepository: IMatchRepository
  ) {}

  async execute({ timeA, timeB, vencedor, campeonatoId }: ICreateMatchDTO) {
    const createMatch = await this.matchRepository.createMatch({ timeA, timeB, vencedor, campeonatoId });

    return createMatch;
  }
}

export { CreateMatchUseCase };
