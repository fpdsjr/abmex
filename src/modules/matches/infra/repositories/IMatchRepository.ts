import { ICreateMatchDTO } from '../../dtos/ICreateMatchDTO';
import { Match } from '../entities/match';

interface IMatchRepository {
  createMatch: ({ timeA, timeB, vencedor }: ICreateMatchDTO) => Promise<Match>;
  listMatchesByTournament: (id: string) => Promise<Match[]>;
  listMatch: (id: string) => Promise<Match | null>;
}

export { IMatchRepository };
