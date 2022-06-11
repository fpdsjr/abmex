import { inject, injectable } from 'tsyringe';

import { IUpdateTournamentDTO } from '../../dtos/IUpdateTournamentDTO';
import { ITournamentRepository } from '../../infra/repositories/ITournamentRepository';

@injectable()
class UpdateTournamentUseCase {
  constructor(
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute({ id, nome, descricao, premiacao }: IUpdateTournamentDTO) {
    const updateTournament = await this.tournamentRepository.updateTournament({
      id,
      nome,
      descricao,
      premiacao,
    });

    return updateTournament;
  }
}

export { UpdateTournamentUseCase };
