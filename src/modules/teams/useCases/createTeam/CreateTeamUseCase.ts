import { ICreateTeamsDTO } from '~/modules/teams/dtos/ICreateTeamsDTO';
import { Team } from '~/modules/teams/infra/entities/teams';
import { ITeamsRepository } from '~/modules/teams/infra/repositories/ITeamsRepository';
import { AppError } from '~/shared/erros/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTeamUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute({ id, nome, iniciais }: ICreateTeamsDTO): Promise<Team> {
    if (iniciais.length !== 3) {
      throw new AppError('As inicias de um time devem ter 3 caracteres', 400);
    }

    const createTeam = await this.teamsRepository.createTeam({
      id,
      nome,
      iniciais,
    });

    return createTeam;
  }
}

export { CreateTeamUseCase };
