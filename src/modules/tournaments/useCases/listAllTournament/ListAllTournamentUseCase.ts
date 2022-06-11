import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

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
