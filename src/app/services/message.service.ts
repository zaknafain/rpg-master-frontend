import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string, type: string = 'API') {
    this.messages.push(message);
    if (!environment.production) { this.consoleOutput(message, type); }
  }

  clear() {
    this.messages = [];
  }

  private consoleOutput(message: string, type: string) {
    let eyeCatcher = '=';
    if (type === 'ERROR') { eyeCatcher = '!'; }

    console.info(`${eyeCatcher.repeat(9)} ${type} ${eyeCatcher.repeat(9)}`);
    console.info(message);
  }
}
