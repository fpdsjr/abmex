import { ICreateTournamentDTO } from '~/modules/tournaments/dtos/ICreateTournamentDTO';
import { Tournament } from '~/modules/tournaments/infra/entities/tournament';
import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute({ nome, descricao, premiacao }: ICreateTournamentDTO): Promise<Tournament> {
    const createTournament = await this.tournamentRepository.createTournament({
      nome,
      descricao,
      premiacao,
    });

    return createTournament;
  }
}

export { CreateTournamentUseCase };
