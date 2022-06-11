import { IUpdateTeamsDTO } from '~/modules/teams/dtos/IUpdateTeamDTO';
import { Team } from '~/modules/teams/infra/entities/teams';
import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
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
