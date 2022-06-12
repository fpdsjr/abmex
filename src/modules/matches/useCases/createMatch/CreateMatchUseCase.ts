import { ITournamentRepository } from '~/modules/tournaments/infra/repositories/ITournamentRepository';
import { AppError } from '~/shared/infra/erros/AppError';
import { inject, injectable } from 'tsyringe';

import { ICreateMatchDTO } from '../../dtos/ICreateMatchDTO';
import { IMatchRepository } from '../../infra/repositories/IMatchRepository';

@injectable()
class CreateMatchUseCase {
  constructor(
    @inject('MatchRepository')
    private matchRepository: IMatchRepository,
    @inject('TournamentRepository')
    private tournamentRepository: ITournamentRepository
  ) {}

  async execute({ timeA, timeB, vencedor, campeonatoId }: ICreateMatchDTO) {
    const findTournamentStatus = await this.tournamentRepository.listTournamentById(campeonatoId);

    if (!findTournamentStatus?.status) {
      throw new AppError('Campeonato não iniciado', 404);
    }

    const createMatch = await this.matchRepository.createMatch({ timeA, timeB, vencedor, campeonatoId });

    return createMatch;
  }
}

export { CreateMatchUseCase };
