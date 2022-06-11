import { Team } from '~/modules/teams/infra/entities/teams';
import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { inject, injectable } from 'tsyringe';

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
