import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../models/user';

export class PasswordValidation {
  static matchPassword(formGroup: FormGroup) {
    let password = formGroup.get('password').value;
    let passwordConfirmation = formGroup.get('passwordConfirmation').value;
    if(password != passwordConfirmation) {
      return formGroup.get('passwordConfirmation').setErrors( { matchPassword: true } )
    } else {
      return null
    }
  }
}

@Component({
  selector: 'settings-password',
  templateUrl: './settings-password.component.html',
  styles: [
    `
      :host { display: block; }
      form { display: flex; flex-direction: column; }
      .button-row { display: flex; align-items: center; justify-content: flex-end; }
    `
  ]
})
export class SettingsPasswordComponent implements OnInit {
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
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required
      ])
    }, {
      validator: PasswordValidation.matchPassword
    });
  }

  onSubmit() {
    this.isLoading = true;
    let user = JSON.parse(JSON.stringify(this.currentUser));
    user.password = this.userForm.controls.password.value;
    user.passwordConfirmation = this.userForm.controls.passwordConfirmation.value;
    this.userService.updateUser(user).subscribe(user => {
      this.currentUser = user;
      this.isLoading = false;
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
