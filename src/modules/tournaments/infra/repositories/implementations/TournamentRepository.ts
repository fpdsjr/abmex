import { prisma } from '../../../../../database/prisma';
import { ICreateTournamentDTO } from '../../dtos/ICreateTournamentDTO';
import { Tournament } from '../../entities/tournament';
import { ITournamentRepository } from '../../ITournamentRepository';

class TournamentRepository implements ITournamentRepository {
  async createTournament({
    nome,
    descricao,
    premiacao,
  }: ICreateTournamentDTO): Promise<Tournament> {
    const createTournament = await prisma.campeonato.create({
      data: {
        nome,
        descricao,
        premiacao,
      },
    });

    return createTournament;
  }
}

export { TournamentRepository };
