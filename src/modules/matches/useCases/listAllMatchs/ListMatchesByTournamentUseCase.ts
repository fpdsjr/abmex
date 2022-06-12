import { inject, injectable } from 'tsyringe';

import { IMatchRepository } from '../../infra/repositories/IMatchRepository';

@injectable()
class ListMatchesByTournamentUseCase {
  constructor(
    @inject('MatchRepository')
    private matchRepository: IMatchRepository
  ) {}

  async execute(id: string) {
    const listAllMatches = await this.matchRepository.listMatchesByTournament(id);

    return listAllMatches;
  }
}

export { ListMatchesByTournamentUseCase };
