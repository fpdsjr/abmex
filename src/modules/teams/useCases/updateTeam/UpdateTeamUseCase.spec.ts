import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { UpdateTeamUseCase } from './UpdateTeamUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let updateTeamUseCase: UpdateTeamUseCase;

describe('Update Team', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    updateTeamUseCase = new UpdateTeamUseCase(teamsRepositoryInMemory);
  });

  it('should be able to update a team', async () => {
    const createTeam = await teamsRepositoryInMemory.createTeam({
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    });

    const updateTeam = {
      id: createTeam.id,
      nome: 'liverpool',
      iniciais: 'LIV',
    };

    const response = await updateTeamUseCase.execute(updateTeam);

    expect(response.id).toBe(createTeam.id);
    expect(response.nome).toBe('liverpool');
  });
});
