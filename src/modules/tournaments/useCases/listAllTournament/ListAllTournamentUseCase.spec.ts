import { TournamentRepositoryInMemory } from '../../infra/repositories/in-memory/TournamentRepositoryInMemory';
import { ListAllTournamentUseCase } from './ListAllTournamentUseCase';

let tournamentRepositoryInMemory: TournamentRepositoryInMemory;
let listAllTournamentUseCase: ListAllTournamentUseCase;

describe('List All Tournaments ', () => {
  beforeEach(() => {
    tournamentRepositoryInMemory = new TournamentRepositoryInMemory();
    listAllTournamentUseCase = new ListAllTournamentUseCase(tournamentRepositoryInMemory);
  });

  it('should be able to list all tournaments', async () => {
    await tournamentRepositoryInMemory.createTournament({
      nome: 'champions league',
      descricao: 'maior campeonato da Europa',
      premiacao: 20000000,
    });

    await tournamentRepositoryInMemory.createTournament({
      nome: 'libertadores',
      descricao: 'libertadores da America',
      premiacao: 300000,
    });

    const listAllTournaments = await listAllTournamentUseCase.execute();

    expect(listAllTournaments.length).toBe(2);
  });
});
