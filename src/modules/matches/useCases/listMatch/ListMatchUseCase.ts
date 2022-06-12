import { inject, injectable } from 'tsyringe';

import { IMatchRepository } from '../../infra/repositories/IMatchRepository';

@injectable()
class ListMatchUseCase {
  constructor(
    @inject('MatchRepository')
    private matchRepository: IMatchRepository
  ) {}

  async handle(id: string) {
    const listMatch = await this.matchRepository.listMatch(id);

    return listMatch;
  }
}

export { ListMatchUseCase };
