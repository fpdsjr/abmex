import { inject, injectable } from 'tsyringe';

import { ITournamentRepository } from '../../infra/repositories/ITournamentRepository';

@injectable()
class ListAllTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}
  async execute() {
    const listAllTournaments = await this.tournamentRepository.listAllTournament();

    return listAllTournaments;
  }
}

export { ListAllTournamentUseCase };
