import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Input() signIn: Account;
  @Output() signedIn = new EventEmitter<Account>();

  constructor(public accountService: AccountService) { }

  ngOnInit() { }

  onSubmit() {
    this.signIn = this.accountService.signIn(this.signIn);
    this.signedIn.emit(this.signIn);
  }
}
