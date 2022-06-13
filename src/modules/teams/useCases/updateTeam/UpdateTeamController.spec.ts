import { prisma } from '~/shared/infra/database/prisma';
import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Update Team Controller', () => {
  afterAll(async () => {
    await prisma.time.deleteMany();
    await prisma.campeonato.deleteMany();
    await prisma.partida.deleteMany();
  });

  it('should be able to update a team', async () => {
    const createTournament = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    const createTeam = await request(app).post(`/team/create/${createTournament.body.id}`).send({
      nome: 'FLAMENGO',
      iniciais: 'FLA',
    });

    const response = await request(app).put(`/team/update/${createTeam.body.id}`).send({
      nome: 'BARCELONA',
      iniciais: 'BAR',
    });

    expect(response.status).toBe(200);
    expect(createTeam.body.id).toBe(response.body.id);
    expect(response.body.nome).toBe('BARCELONA');
  });
});
