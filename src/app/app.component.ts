import { Component } from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: Account;

  assignCurrentUser(user: Account) {
    this.currentUser = user;
  }
}
