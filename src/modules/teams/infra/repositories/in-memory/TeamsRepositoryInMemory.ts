import { ICreateTeamsDTO } from '~/modules/teams/dtos/ICreateTeamsDTO';
import { IUpdateTeamsDTO } from '~/modules/teams/dtos/IUpdateTeamDTO';

import { Team } from '../../entities/teams';
import { ITournament } from '../implementations/TeamsRepository';
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

  async updateTeam({ id, nome, iniciais }: IUpdateTeamsDTO): Promise<Team> {
    const findTeamById = (await this.findTeamById(id)) as Team;

    Object.assign(findTeamById, {
      nome,
      iniciais,
    });

    return findTeamById;
  }

  async listAllTeams(): Promise<Team[]> {
    const listAllTeams = await this.teams;

    return listAllTeams;
  }

  async findTeamById(id: string): Promise<Team | null> {
    const findTeamById = await this.teams.find(team => team.id === id);

    return findTeamById!;
  }

  async deleteTeam(id: string): Promise<Team> {
    const deletedTeam = (await this.findTeamById(id)) as Team;
    const deleteTeamById = this.teams.filter(team => team.id !== id);

    deleteTeamById.map(team => this.teams.push(team));

    return deletedTeam;
  }

  async listTeamsByTournament(id: string): Promise<ITournament> {
    const listTeamsByTournament = await this.teams.filter(teams => teams.campeonatoId === id);

    const tournament = {
      id,
      nome: 'champions',
      descricao: 'maior campeonato europa',
      premiacao: 200000,
      times: listTeamsByTournament,
    };

    return tournament;
  }
}

export { TeamsRepositoryInMemory };
