import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { FindTeamByIdUseCase } from './FindTeamByIdUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let findTeamByIdUseCase: FindTeamByIdUseCase;

describe('Find Team By Id', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    findTeamByIdUseCase = new FindTeamByIdUseCase(teamsRepositoryInMemory);
  });

  it('should be able to find a team by an id', async () => {
    const createTeam = await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    const response = await findTeamByIdUseCase.execute(createTeam.id);

    expect(response).toHaveProperty('id');
    expect(response?.nome).toBe('flamengo');
  });
});
