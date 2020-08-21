import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { User } from './models/user';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'rpgm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile = false;
  currentUser: User;
  jwtToken: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.assignCurrentUser(this.authService.jwtToken);
    this.authService.changed.subscribe((token: string) => {
      this.assignCurrentUser(token);
    });
  }

  assignCurrentUser(token: string) {
    this.jwtToken = token;
    if (this.jwtToken) {
      this.loadCurrentUser();
    } else {
      this.currentUser = undefined;
    }
  }

  loadCurrentUser() {
    this.userService.loadCurrentUser().subscribe(
      user => {
        this.currentUser = user;
        if (!user) { this.signOut(); }
      }
    );
  }

  signOut(): void {
    this.authService.signOut();
  }
}
