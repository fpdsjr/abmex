import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { DeleteTeamUseCase } from './DeleteTeamUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let deleteTeamUseCase: DeleteTeamUseCase;

describe('Delete Team', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    deleteTeamUseCase = new DeleteTeamUseCase(teamsRepositoryInMemory);
  });

  it('should be able to delete a team', async () => {
    const createTeam = await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    const response = await deleteTeamUseCase.execute(createTeam.id);

    expect(response.id).toBe(createTeam.id);
  });
});
