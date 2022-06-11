import { inject, injectable } from 'tsyringe';

import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

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
