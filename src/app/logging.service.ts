import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {


  constructor() { }
  // Adicionando função de logging
  addToLog(value: string, success: boolean = true) {
    if (success)
      console.log('Logging: ' + value);
    else
      console.error('Error: ' + value);
  }

}
