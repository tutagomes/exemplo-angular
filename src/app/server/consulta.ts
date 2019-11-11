export class Consulta {
    online: boolean;
    message: string;
    date: number;
    constructor (online: boolean, message: string) {
      this.online = online
      this.message = message
      this.date = Date.now()
    }
  }