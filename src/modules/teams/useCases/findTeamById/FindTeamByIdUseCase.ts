import { inject, injectable } from 'tsyringe';

import { Team } from '../../infra/entities/teams';
import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

@injectable()
class FindTeamByIdUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(id: string): Promise<Team | null> {
    const findTeamById = await this.teamsRepository.findTeamById(id);

    return findTeamById;
  }
}

export { FindTeamByIdUseCase };
