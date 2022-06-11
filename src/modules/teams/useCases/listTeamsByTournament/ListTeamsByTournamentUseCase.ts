import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListTeamsByTournamentUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(id: string) {
    const listTeamsByTournament = await this.teamsRepository.listTeamsByTournament(id);

    return listTeamsByTournament;
  }
}

export { ListTeamsByTournamentUseCase };
