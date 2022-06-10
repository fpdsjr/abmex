import { inject, injectable } from 'tsyringe';

import { IUpdateTeamsDTO } from '../../dtos/IUpdateTeamDTO';
import { Team } from '../../infra/entities/teams';
import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

@injectable()
class UpdateTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,
  ) {}

  async execute({ id, nome, iniciais }: IUpdateTeamsDTO): Promise<Team> {
    const updateTeam = await this.teamsRepository.updateTeam({
      id,
      nome,
      iniciais,
    });

    return updateTeam;
  }
}

export { UpdateTeamUseCase };
