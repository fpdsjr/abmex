import { app } from '~/shared/infra/http/app';
import request from 'supertest';

describe('Create Tournament Controller', () => {
  it('should be able to create a new tournament', async () => {
    const response = await request(app).post('/tournament/create').send({
      nome: 'champions',
      descricao: 'maior campeonato da europa',
      premiacao: 45221,
    });

    expect(response.status).toBe(201);
  });
});
