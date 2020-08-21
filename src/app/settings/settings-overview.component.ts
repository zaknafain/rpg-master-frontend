import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
  selector: 'app-settings-overview',
  templateUrl: './settings-overview.component.html'
})
export class SettingsOverviewComponent {
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.currentUser;
  }

}
