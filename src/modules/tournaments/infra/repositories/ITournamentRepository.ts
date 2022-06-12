import { ICreateTournamentDTO } from '../../dtos/ICreateTournamentDTO';
import { IUpdateTournamentDTO } from '../../dtos/IUpdateTournamentDTO';
import { Tournament } from '../entities/tournament';

interface ITournamentRepository {
  createTournament: ({ nome, descricao, premiacao }: ICreateTournamentDTO) => Promise<Tournament>;

  findTournamentById: (id: string) => Promise<Tournament | null>;

  listAllTournament: () => Promise<Tournament[]>;

  updateTournament: ({ id, nome, descricao, premiacao }: IUpdateTournamentDTO) => Promise<Tournament>;

  startTournament: (id: string) => Promise<Tournament>;
}

export { ITournamentRepository };
