import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
  selector: 'settings-identity',
  templateUrl: './settings-identity.component.html',
  styles: [`
    :host { display: block; }
    form { display: flex; flex-direction: column; }
    .button-row { display: flex; align-items: center; justify-content: flex-end; }
  `]
})
export class SettingsIdentityComponent implements OnInit {
  currentUser: User;
  userForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.currentUser = this.userService.currentUser;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      email: this.currentUser.email,
      name: this.currentUser.name
    });
  }

  onSubmit() {
    this.isLoading = true;
    let user = JSON.parse(JSON.stringify(this.currentUser));
    user.email = this.userForm.controls.email.value;
    user.name = this.userForm.controls.name.value;
    this.userService.updateUser(user).subscribe(user => {
      this.currentUser = user;
      this.isLoading = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
