import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { Tournament } from '~/modules/tournaments/infra/entities/tournament';
import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { AppError } from '~/shared/erros/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class StartTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository,
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(id: string): Promise<Tournament> {
    const getAllTimes = await this.teamsRepository.listTeamsByTournament(id);

    if (!Number.isInteger(Math.log2(getAllTimes!.times.length))) {
      throw new AppError('Não é possível iniciar o campeonato', 405);
    }

    const startTournament = await this.tournamentRepository.startTournament(id);

    return startTournament;
  }
}

export { StartTournamentUseCase };
