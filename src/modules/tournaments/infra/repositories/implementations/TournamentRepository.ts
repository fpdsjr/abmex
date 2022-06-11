import { prisma } from '../../../../../shared/infra/database/prisma';
import { ICreateTournamentDTO } from '../../../dtos/ICreateTournamentDTO';
import { IUpdateTournamentDTO } from '../../../dtos/IUpdateTournamentDTO';
import { Tournament } from '../../entities/tournament';
import { ITournamentRepository } from '../ITournamentRepository';

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

  async listTournamentById(id: string): Promise<Tournament | null> {
    const listTournamentById = await prisma.campeonato.findFirst({
      where: {
        id,
      },
    });

    return listTournamentById;
  }

  async listAllTournament(): Promise<Tournament[]> {
    const listAllTournaments = await prisma.campeonato.findMany();

    return listAllTournaments;
  }

  async updateTournament({
    id,
    nome,
    descricao,
    premiacao,
  }: IUpdateTournamentDTO): Promise<Tournament> {
    const updateTournament = await prisma.campeonato.update({
      where: {
        id,
      },
      data: {
        nome,
        descricao,
        premiacao,
      },
    });

    return updateTournament;
  }
}

export { TournamentRepository };
