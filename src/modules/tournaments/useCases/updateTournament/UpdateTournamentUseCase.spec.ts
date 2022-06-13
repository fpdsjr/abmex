import { TournamentRepositoryInMemory } from '../../infra/repositories/in-memory/TournamentRepositoryInMemory';
import { UpdateTournamentUseCase } from './UpdateTournamentUseCase';

let tournamentRepositoryInMemory: TournamentRepositoryInMemory;
let updateTournamentUseCase: UpdateTournamentUseCase;

describe('update Tournament', () => {
  beforeEach(() => {
    tournamentRepositoryInMemory = new TournamentRepositoryInMemory();
    updateTournamentUseCase = new UpdateTournamentUseCase(tournamentRepositoryInMemory);
  });

  it('should be able to upload a tournament', async () => {
    const createTournament = await tournamentRepositoryInMemory.createTournament({
      nome: 'champions league',
      descricao: 'maior campeonato da Europa',
      premiacao: 20000000,
    });

    const update = {
      id: createTournament.id,
      nome: 'libertadores',
      descricao: 'maior campeonato das Americas',
      premiacao: 3000000,
    };

    const response = await updateTournamentUseCase.execute(update);

    expect(response).toHaveProperty('id');
    expect(response.nome).toBe('libertadores');
  });
});
