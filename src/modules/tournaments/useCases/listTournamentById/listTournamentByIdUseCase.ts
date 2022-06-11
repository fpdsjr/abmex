import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListTournamentByIdUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute(id: string) {
    const listTournamentById = await this.tournamentRepository.listTournamentById(id);

    return listTournamentById;
  }
}

export { ListTournamentByIdUseCase };
