import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('List All Tournament Controller', () => {
  beforeAll(async () => {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE campeonato RESTART IDENTITY CASCADE;`);
  });

  afterAll(async () => {
    await prisma.campeonato.deleteMany();
  });

  it('should be able to list all tournaments', async () => {
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
  });
});
