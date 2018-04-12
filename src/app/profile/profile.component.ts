import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  userForm: FormGroup;
  isLoading: boolean = false;

  constructor(
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
    });
  }
}
