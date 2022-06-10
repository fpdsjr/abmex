import { container } from 'tsyringe';

import { ITournamentRepository } from '../../modules/tournaments/infra/ITournamentRepository';
import { TournamentRepository } from '../../modules/tournaments/infra/repositories/implementations/TournamentRepository';

container.registerSingleton<ITournamentRepository>(
  'TournamentRepository',
  TournamentRepository,
);
