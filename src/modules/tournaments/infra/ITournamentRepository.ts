import { ICreateTournamentDTO } from '../dtos/ICreateTournamentDTO';
import { Tournament } from './entities/tournament';

interface ITournamentRepository {
  createTournament: ({
    nome,
    descricao,
    premiacao,
  }: ICreateTournamentDTO) => Promise<Tournament>;

  listTournamentById: (id: string) => Promise<Tournament | null>;

  listAllTournament: () => Promise<Tournament[]>;
}

export { ITournamentRepository };
