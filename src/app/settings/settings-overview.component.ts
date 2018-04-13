import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
  selector: 'settings-overview',
  templateUrl: './settings-overview.component.html',
  styleUrls: ['./settings-overview.component.scss']
})
export class SettingsOverviewComponent {
  currentUser: User;

  constructor(
    private userService: UserService
  ) {
    this.currentUser = this.userService.currentUser;
  }

}
