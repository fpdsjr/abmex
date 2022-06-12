import { prisma } from '../../../../../shared/infra/database/prisma';
import { Tournament } from '../../../../tournaments/infra/entities/tournament';
import { ICreateTeamsDTO } from '../../../dtos/ICreateTeamsDTO';
import { IUpdateTeamsDTO } from '../../../dtos/IUpdateTeamDTO';
import { Team } from '../../entities/teams';
import { ITeamsRepository } from '../ITeamsRepository';

export interface ITournament {
  id: string;

  nome: string;

  descricao: string;

  premiacao: number;

  times: Team[];
}

class TeamsRepository implements ITeamsRepository {
  async createTeam({ id, nome, iniciais }: ICreateTeamsDTO): Promise<Team> {
    const createTeam = await prisma.time.create({
      data: {
        nome,
        iniciais,
        campeonatoId: id,
      },
    });

    return createTeam;
  }

  async updateTeam({ id, nome, iniciais }: IUpdateTeamsDTO): Promise<Team> {
    const updateTeam = await prisma.time.update({
      where: {
        id,
      },
      data: {
        nome,
        iniciais,
      },
    });

    return updateTeam;
  }

  async listAllTeams(): Promise<Team[]> {
    const listAllTeams = await prisma.time.findMany();

    return listAllTeams;
  }

  async findTeamById(id: string): Promise<Team | null> {
    const findTeamById = await prisma.time.findFirst({
      where: {
        id,
      },
    });

    return findTeamById;
  }

  async listTeamsByTournament(id: string): Promise<ITournament | null> {
    const listTeamsByTournament = await prisma.campeonato.findFirst({
      where: {
        id,
      },
      include: {
        times: true,
      },
    });

    return listTeamsByTournament;
  }

  async deleteTeam(id: string) {
    const deleteTeam = await prisma.time.delete({
      where: {
        id,
      },
    });

    return deleteTeam;
  }
}

export { TeamsRepository };
