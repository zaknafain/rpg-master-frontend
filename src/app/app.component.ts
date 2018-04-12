import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
  mobileQuery: MediaQueryList;
  currentUser: User;
  jwtToken: string;

  private _mobileQueryListener: () => void;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public logDialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
        if (!user) { this.signOut() }
      }
    );
  }

  signOut(): void {
    this.authService.signOut();
  }
}
