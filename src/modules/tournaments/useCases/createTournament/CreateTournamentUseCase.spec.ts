import { TournamentRepositoryInMemory } from '../../infra/repositories/in-memory/TournamentRepositoryInMemory';
import { CreateTournamentUseCase } from './CreateTournamentUseCase';

let createTournamentUseCase: CreateTournamentUseCase;
let tournamentRepositoryInMemory: TournamentRepositoryInMemory;

describe('Create Tournament', () => {
  beforeEach(() => {
    tournamentRepositoryInMemory = new TournamentRepositoryInMemory();
    createTournamentUseCase = new CreateTournamentUseCase(tournamentRepositoryInMemory);
  });

  it('should be able to create a new tournament', async () => {
    const newTournament = {
      nome: 'champions league',
      descricao: 'maior campeonato da Europa',
      premiacao: 20000000,
    };

    await createTournamentUseCase.execute(newTournament);

    const createdTournament = tournamentRepositoryInMemory.tournament.find(tournament => tournament.nome === newTournament.nome);

    expect(createdTournament).toHaveProperty('id');
  });
});
