import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Find Tournament By Id Controller', () => {
  afterAll(async () => {
    await prisma.campeonato.deleteMany();
  });

  it('should be able to find a tournament by id', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    const response = await request(app).get(`/tournament/find/${createTournament.body.id}`);

    expect(response.status).toBe(200);
  });
});
