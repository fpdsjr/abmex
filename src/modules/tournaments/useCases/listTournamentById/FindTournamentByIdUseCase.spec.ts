import { TournamentRepositoryInMemory } from '../../infra/repositories/in-memory/TournamentRepositoryInMemory';
import { FindTournamentByIdUseCase } from './FindTournamentByIdUseCase';

let tournamentRepositoryInMemory: TournamentRepositoryInMemory;
let findTournamentByIdUseCase: FindTournamentByIdUseCase;

describe('List Tournament By Id ', () => {
  beforeEach(() => {
    tournamentRepositoryInMemory = new TournamentRepositoryInMemory();
    findTournamentByIdUseCase = new FindTournamentByIdUseCase(tournamentRepositoryInMemory);
  });

  it('should list a tournament by id', async () => {
    const createTournament = await tournamentRepositoryInMemory.createTournament({
      nome: 'champions league',
      descricao: 'maior campeonato da Europa',
      premiacao: 20000000,
    });

    const response = await findTournamentByIdUseCase.execute(createTournament.id);

    expect(response).toHaveProperty('id');
    expect(response?.id).toBe(createTournament.id);
  });
});
