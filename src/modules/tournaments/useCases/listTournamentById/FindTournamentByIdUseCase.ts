import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { AppError } from '~/shared/erros/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindTournamentByIdUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(id: string) {
    const findTournamentById = await this.tournamentRepository.findTournamentById(id);

    if (!findTournamentById) {
      throw new AppError('Campeonato não encontrado', 400);
    }

    return findTournamentById;
  }
}

export { FindTournamentByIdUseCase };
