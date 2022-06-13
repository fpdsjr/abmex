import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('List All Tournament Controller', () => {
  afterAll(async () => {
    await prisma.time.deleteMany();
    await prisma.campeonato.deleteMany();
    await prisma.partida.deleteMany();
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
    expect(response.body.length).toBe(2);
  });
});
