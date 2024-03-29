import { Tournament } from '../../../tournaments/infra/entities/tournament';
import { ICreateTeamsDTO } from '../../dtos/ICreateTeamsDTO';
import { IUpdateTeamsDTO } from '../../dtos/IUpdateTeamDTO';
import { Team } from '../entities/teams';
import { ITournament } from './implementations/TeamsRepository';

interface ITeamsRepository {
  createTeam: ({ id, nome, iniciais }: ICreateTeamsDTO) => Promise<Team>;
  updateTeam: ({ id, nome, iniciais }: IUpdateTeamsDTO) => Promise<Team>;
  listAllTeams: () => Promise<Team[]>;
  findTeamById: (id: string) => Promise<Team | null>;
  listTeamsByTournament: (id: string) => Promise<ITournament | null>;
  deleteTeam: (id: string) => Promise<Team>;
}

export { ITeamsRepository };
