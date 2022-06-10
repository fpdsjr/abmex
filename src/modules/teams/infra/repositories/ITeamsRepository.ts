import { ICreateTeamsDTO } from '../../dtos/ICreateTeamsDTO';
import { Team } from '../entities/teams';

interface ITeamsRepository {
  createTeam: ({ id, nome, iniciais }: ICreateTeamsDTO) => Promise<Team>;
}

export { ITeamsRepository };
