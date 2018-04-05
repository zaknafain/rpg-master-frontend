import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from './models/user';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

import { LogDialog } from './log-dialog/log-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  jwtToken: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService,
    public logDialog: MatDialog
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

  openLogDialog(): void {
    this.logDialog.open(LogDialog, {
      width: '700px',
      data: { messages: this.messageService.messages }
    });
  }
}
