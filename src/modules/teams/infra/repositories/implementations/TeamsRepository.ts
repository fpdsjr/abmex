import { prisma } from '../../../../../database/prisma';
import { ICreateTeamsDTO } from '../../../dtos/ICreateTeamsDTO';
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
}

export { TeamsRepository };
