export class Consulta {
    id: number;
    online: boolean;
    message: string;
    date: number;
    constructor (id: number = null, online: boolean = true, message: string= '') {
      this.online = online
      this.message = message
      this.date = Date.now()
      this.id = id
    }
  }