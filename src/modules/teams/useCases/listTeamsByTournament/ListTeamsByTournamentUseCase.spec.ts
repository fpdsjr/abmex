import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { ListTeamsByTournamentUseCase } from './ListTeamsByTournamentUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let listTeamsByTournamentUseCase: ListTeamsByTournamentUseCase;

describe('List Teams By Tournament', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    listTeamsByTournamentUseCase = new ListTeamsByTournamentUseCase(teamsRepositoryInMemory);
  });

  it('should be able to list teams by tournament', async () => {
    await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'vasco',
      iniciais: 'vsc',
    });

    const response = await listTeamsByTournamentUseCase.execute('12345678');

    expect(response?.times.length).toBe(2);
    expect(response?.id).toBe('12345678');
  });
});
