import { v4 as uuidv4 } from 'uuid';

class Match {
  id: string;

  timeA: string;

  timeB: string;

  vencedor: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Match };
