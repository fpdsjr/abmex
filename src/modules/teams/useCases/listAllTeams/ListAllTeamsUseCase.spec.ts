import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { ListAllTeamsUseCase } from './ListAllTeamsUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let listAllTeamsUseCase: ListAllTeamsUseCase;

describe('List All Teams', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    listAllTeamsUseCase = new ListAllTeamsUseCase(teamsRepositoryInMemory);
  });

  it('should be able to list all teams', async () => {
    await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    await teamsRepositoryInMemory.createTeam({
      id: '12345',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    const response = await listAllTeamsUseCase.execute();

    expect(response.length).toBe(2);
  });
});
