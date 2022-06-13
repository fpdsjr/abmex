import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('List Teams By Tournament Controller', () => {
  afterAll(async () => {
    await prisma.campeonato.deleteMany();
  });

  it('should be able to delete a team', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'FLAMENGO',
      iniciais: 'FLA',
    });

    await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'VASCO',
      iniciais: 'VSC',
    });

    const response = await request(app).get(`/team/tournament/${createTournament.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('times');
    expect(response.body.times[0].nome).toBe('FLAMENGO');
    expect(response.body.times[1].nome).toBe('VASCO');
  });
});
