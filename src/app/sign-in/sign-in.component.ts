import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Account } from '../models/account';
import { AccountService } from '../services/account.service'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Input() signIn: Account;
  @Output() signedIn = new EventEmitter<Account>();
  signInForm: FormGroup;

  constructor(
    public accountService: AccountService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.signIn = this.accountService.signIn(this.signIn);
    this.signedIn.emit(this.signIn);
    this.signInForm.reset();
  }
}
