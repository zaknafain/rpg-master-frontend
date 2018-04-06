import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { httpInterceptorProviders } from './http-interceptors/index';

import { AuthService } from './services/auth.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogDialog } from './log-dialog/log-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogDialog,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    MediaMatcher,
    httpInterceptorProviders,
    AuthService,
    ErrorHandlingService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LogDialog]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', router.config);
  }
}
