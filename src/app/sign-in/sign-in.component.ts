import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Output() signedIn = new EventEmitter<string>();
  signInForm: FormGroup;
  showForm: boolean;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.showForm = !this.authService.isLoggedIn();
    if (this.showForm) {
      this.createForm();
    }
  }

  createForm() {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.authService.signIn(
      this.signInForm.controls.email.value,
      this.signInForm.controls.password.value
    ).subscribe(jwtToken => {
      this.signedIn.emit(jwtToken);
      this.signInForm.reset();
    });
  }
}
