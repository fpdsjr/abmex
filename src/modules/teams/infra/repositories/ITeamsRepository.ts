import { ICreateTeamsDTO } from '../../dtos/ICreateTeamsDTO';
import { IUpdateTeamsDTO } from '../../dtos/IUpdateTeamDTO';
import { Team } from '../entities/teams';

interface ITeamsRepository {
  createTeam: ({ id, nome, iniciais }: ICreateTeamsDTO) => Promise<Team>;
  updateTeam: ({ id, nome, iniciais }: IUpdateTeamsDTO) => Promise<Team>;
}

export { ITeamsRepository };
