import { inject, injectable } from 'tsyringe';

import { ICreateTournamentDTO } from '../../dtos/ICreateTournamentDTO';
import { Tournament } from '../../infra/entities/tournament';
import { ITournamentRepository } from '../../infra/repositories/ITournamentRepository';

@injectable()
class CreateTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository,
  ) {}

  async execute({
    nome,
    descricao,
    premiacao,
  }: ICreateTournamentDTO): Promise<Tournament> {
    const createTournament = await this.tournamentRepository.createTournament({
      nome,
      descricao,
      premiacao,
    });

    return createTournament;
  }
}

export { CreateTournamentUseCase };
