import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Delete Team Controller', () => {
  afterAll(async () => {
    await prisma.time.deleteMany();
  });

  it('should be able to delete a team', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    const createdTeam = await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'FLAMENGO',
      iniciais: 'FLA',
    });

    const response = await request(app).delete(`/team/delete/${createdTeam.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body.deletado).toBeTruthy();
  });
});
