import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Create Team Controller', () => {
  afterAll(async () => {
    await prisma.time.deleteMany();
  });

  it('should be able to create a new team', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    const response = await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'FLAMENGO',
      iniciais: 'FLA',
    });

    expect(response.status).toBe(201);
  });
});
