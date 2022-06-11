import { IUpdateTournamentDTO } from '~/modules/tournaments/dtos/IUpdateTournamentDTO';
import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { inject, injectable } from 'tsyringe';

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
