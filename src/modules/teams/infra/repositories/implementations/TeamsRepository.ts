import { prisma } from '../../../../../database/prisma';
import { ICreateTeamsDTO } from '../../../dtos/ICreateTeamsDTO';
import { IUpdateTeamsDTO } from '../../../dtos/IUpdateTeamDTO';
import { Team } from '../../entities/teams';
import { ITeamsRepository } from '../ITeamsRepository';

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
}

export { TeamsRepository };
