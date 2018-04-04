import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AccountService } from './services/account.service'

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
