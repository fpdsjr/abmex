import { inject, injectable } from 'tsyringe';

import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

@injectable()
class ListTeamsByTournamentUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  async execute(id: string) {
    const listTeamsByTournament =
      await this.teamsRepository.listTeamsByTournament(id);

    return listTeamsByTournament;
  }
}

export { ListTeamsByTournamentUseCase };
