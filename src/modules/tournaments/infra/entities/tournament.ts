import { Status } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

class Tournament {
  id: string;

  nome: string;

  descricao: string;

  premiacao: number;

  status: Status;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Tournament };
