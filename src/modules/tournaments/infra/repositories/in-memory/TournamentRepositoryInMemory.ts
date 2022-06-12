import { ICreateTournamentDTO } from '~/modules/tournaments/dtos/ICreateTournamentDTO';
import { IUpdateTournamentDTO } from '~/modules/tournaments/dtos/IUpdateTournamentDTO';
import { Tournament } from '~/modules/tournaments/infra/entities/tournament';

import { ITournamentRepository } from '../ITournamentRepository';

class TournamentRepositoryInMemory implements ITournamentRepository {
  tournament: Tournament[] = [];
  async createTournament({ nome, descricao, premiacao }: ICreateTournamentDTO): Promise<Tournament> {
    const tournament = new Tournament();

    Object.assign(tournament, {
      nome,
      descricao,
      premiacao,
    });

    this.tournament.push(tournament);

    return tournament;
  }

  async listAllTournament(): Promise<Tournament[]> {
    const listAllTournaments = this.tournament;

    return listAllTournaments;
  }
}

export { TournamentRepositoryInMemory };
