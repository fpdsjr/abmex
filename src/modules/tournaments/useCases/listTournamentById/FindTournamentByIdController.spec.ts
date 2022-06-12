import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Create Tournament Controller', () => {
  afterAll(async () => {
    await prisma.campeonato.deleteMany();
  });

  it('should be able to find a tournament by id', async () => {
    await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    await request(app).post('/tournament/create').send({
      nome: 'libertadores',
      descricao: 'libertadores da america',
      premiacao: 20000,
    });

    const response = await request(app).get('/tournament/listall');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
