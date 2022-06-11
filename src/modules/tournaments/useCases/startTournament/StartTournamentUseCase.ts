import { Tournament } from '~/modules/tournaments/infra/entities/tournament';
import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class StartTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(id: string): Promise<Tournament> {
    const startTournament = await this.tournamentRepository.startTournament(id);

    return startTournament;
  }
}

export { StartTournamentUseCase };
