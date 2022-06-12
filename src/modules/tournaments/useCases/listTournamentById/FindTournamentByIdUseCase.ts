import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindTournamentByIdUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(id: string) {
    const findTournamentById = await this.tournamentRepository.listTournamentById(id);

    return findTournamentById;
  }
}

export { FindTournamentByIdUseCase };
