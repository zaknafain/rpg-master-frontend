import { Component } from '@angular/core';

import { Account } from './models/account';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: Account;
  jwtToken: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.assignCurrentUser(this.authService.jwtToken);
  }

  assignCurrentUser(token: string) {
    this.jwtToken = token;
    if (this.jwtToken) {
      this.loadCurrentUser();
    }
  }

  loadCurrentUser() {
    this.userService.loadCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }
}
