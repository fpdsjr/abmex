import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Find Team By Id Controller', () => {
  afterAll(async () => {
    await prisma.time.deleteMany();
  });

  it('should be able to find a team by id', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    const createdTeam = await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'FLAMENGO',
      iniciais: 'FLA',
    });

    const response = await request(app).get(`/team/${createdTeam.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('FLAMENGO');
  });
});
