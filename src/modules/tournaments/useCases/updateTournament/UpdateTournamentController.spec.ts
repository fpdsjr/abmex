import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Update Tournament Controller', () => {
  afterAll(async () => {
    await prisma.campeonato.deleteMany();
  });

  it('should be able to update a tournament', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da Europa',
      premiacao: 45221,
    });

    const response = await request(app).put(`/tournament/update/${createTournament.body.id}`).send({
      nome: 'libertadores',
      descricao: 'maior campeonato das Americas',
      premiacao: 20000,
    });

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('libertadores');
  });
});
