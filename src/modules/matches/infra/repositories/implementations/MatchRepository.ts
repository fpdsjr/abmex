import { ICreateMatchDTO } from '~/modules/matches/dtos/ICreateMatchDTO';
import { prisma } from '~/shared/infra/database/prisma';

import { Match } from '../../entities/match';
import { IMatchRepository } from '../IMatchRepository';

class MatchRepository implements IMatchRepository {
  async createMatch({ timeA, timeB, vencedor, campeonatoId }: ICreateMatchDTO) {
    const createMatch = await prisma.partida.create({
      data: {
        timeA,
        timeB,
        vencedor,
        campeonatoId,
      },
    });

    return createMatch;
  }

  async listMatchesByTournament(id: string): Promise<Match[]> {
    const listMatchesByTournament = await prisma.partida.findMany({
      where: {
        campeonatoId: id,
      },
      include: {
        timeAId: true,
        timeBId: true,
      },
    });

    return listMatchesByTournament;
  }

  async listMatch(id: string): Promise<Match | null> {
    const listMatch = await prisma.partida.findFirst({
      where: {
        id,
      },
      include: {
        timeAId: true,
        timeBId: true,
        campeonato: true,
      },
    });

    return listMatch;
  }
}

export { MatchRepository };
