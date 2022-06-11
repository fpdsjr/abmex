import { inject, injectable } from 'tsyringe';

import { Team } from '../../infra/entities/teams';
import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

@injectable()
class ListAllTeamsUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(): Promise<Team[]> {
    const listAllTeams = await this.teamsRepository.listAllTeams();

    return listAllTeams;
  }
}

export { ListAllTeamsUseCase };
