import { AppError } from '~/shared/erros/AppError';

import { TeamsRepositoryInMemory } from '../../infra/repositories/in-memory/TeamsRepositoryInMemory';
import { CreateTeamUseCase } from './CreateTeamUseCase';

let teamsRepositoryInMemory: TeamsRepositoryInMemory;
let createTeamUseCase: CreateTeamUseCase;

describe('Create Team', () => {
  beforeEach(() => {
    teamsRepositoryInMemory = new TeamsRepositoryInMemory();
    createTeamUseCase = new CreateTeamUseCase(teamsRepositoryInMemory);
  });

  it('should be able to create a new team', async () => {
    const createTeam = {
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLA',
    };

    const response = await createTeamUseCase.execute(createTeam);

    expect(response).toHaveProperty('campeonatoId');
    expect(response).toHaveProperty('id');
  });

  it('should not be able to create a team with iniciais less than 3', async () => {
    const createTeam = {
      id: '12345678',
      nome: 'flamengo',
      iniciais: 'FLAMENGO',
    };

    await expect(createTeamUseCase.execute(createTeam)).rejects.toEqual(new AppError('As inicias de um time devem ter 3 caracteres', 400));
  });
});
