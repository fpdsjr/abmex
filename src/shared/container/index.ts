import { container } from 'tsyringe';

import { TeamsRepository } from '../../modules/teams/infra/repositories/implementations/TeamsRepository';
import { ITeamsRepository } from '../../modules/teams/infra/repositories/ITeamsRepository';
import { TournamentRepository } from '../../modules/tournaments/infra/repositories/implementations/TournamentRepository';
import { ITournamentRepository } from '../../modules/tournaments/infra/repositories/ITournamentRepository';

container.registerSingleton<ITournamentRepository>('TournamentRepository', TournamentRepository);

container.registerSingleton<ITeamsRepository>('TeamsRepository', TeamsRepository);
