import { inject, injectable } from 'tsyringe';

import { ITournamentRepository } from '../../infra/repositories/ITournamentRepository';

@injectable()
class ListTournamentByIdUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository,
  ) {}

  async execute(id: string) {
    const listTournamentById =
      await this.tournamentRepository.listTournamentById(id);

    return listTournamentById;
  }
}

export { ListTournamentByIdUseCase };
