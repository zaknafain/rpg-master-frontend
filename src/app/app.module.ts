import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { httpInterceptorProviders } from './http-interceptors/index';

import { AuthService } from './services/auth.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogDialog } from './log-dialog/log-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LogDialog,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    ErrorHandlingService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LogDialog]
})
export class AppModule { }
