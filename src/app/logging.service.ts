import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private *getId(initial: number) {
    let i = initial;
    while (true) {
      yield i++;
    }
  }
	private idGenerator: Generator = this.getId(0);
    // Adicionando função de logging
  addToLog(value: string, success: boolean = true) {
    if (success)
      console.log(this.idGenerator.next().value + ' - Logging: ' + value);
    else
      console.error(this.idGenerator.next().value + ' - Error: ' + value);
  }
  constructor() { }
}