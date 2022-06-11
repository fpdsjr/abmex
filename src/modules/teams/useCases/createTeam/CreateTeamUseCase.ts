import { ICreateTeamsDTO } from '~/modules/teams/dtos/ICreateTeamsDTO';
import { Team } from '~/modules/teams/infra/entities/teams';
import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute({ id, nome, iniciais }: ICreateTeamsDTO): Promise<Team> {
    const createTeam = await this.teamsRepository.createTeam({
      id,
      nome,
      iniciais,
    });

    return createTeam;
  }
}

export { CreateTeamUseCase };
