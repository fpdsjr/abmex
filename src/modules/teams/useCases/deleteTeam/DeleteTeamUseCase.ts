import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(id: string) {
    const deleteTeam = await this.teamsRepository.deleteTeam(id);

    return deleteTeam;
  }
}

export { DeleteTeamUseCase };
