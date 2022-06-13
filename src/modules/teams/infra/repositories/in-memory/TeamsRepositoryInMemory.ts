import { ICreateTeamsDTO } from '~/modules/teams/dtos/ICreateTeamsDTO';

import { Team } from '../../entities/teams';
import { ITeamsRepository } from '../ITeamsRepository';

class TeamsRepositoryInMemory implements ITeamsRepository {
  teams: Team[] = [];

  async createTeam({ id, nome, iniciais }: ICreateTeamsDTO): Promise<Team> {
    const newTeam = new Team();

    Object.assign(newTeam, {
      campeonatoId: id,
      nome,
      iniciais,
    });

    this.teams.push(newTeam);

    return newTeam;
  }
}

export { TeamsRepositoryInMemory };
