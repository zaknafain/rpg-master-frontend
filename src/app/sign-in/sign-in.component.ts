import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Output() signedIn = new EventEmitter<string>();
  signInForm: FormGroup;
  isLoading = false;
  showForm: boolean;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
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
    this.isLoading = true;
    this.authService.signIn(
      this.signInForm.controls.email.value,
      this.signInForm.controls.password.value
    ).subscribe(jwtToken => {
      this.signedIn.emit(jwtToken);
      this.showForm = !this.authService.isLoggedIn();
      if (!this.showForm) {
        this.router.navigate([this.authService.redirectUrl]);
      }
      this.isLoading = false;
    });
  }
}
