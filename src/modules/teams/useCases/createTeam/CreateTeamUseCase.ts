import { inject, injectable } from 'tsyringe';

import { ICreateTeamsDTO } from '../../dtos/ICreateTeamsDTO';
import { Team } from '../../infra/entities/teams';
import { ITeamsRepository } from '../../infra/repositories/ITeamsRepository';

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
