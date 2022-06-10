import { v4 as uuidv4 } from 'uuid';

class Team {
  id: string;

  nome: string;

  iniciais: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Team };
