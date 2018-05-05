import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared.module';

import { AuthService } from '../services/auth.service';

import { SettingsComponent } from './settings.component';
import { SettingsOverviewComponent } from './settings-overview.component';
import { SettingsIdentityComponent } from './settings-identity.component';
import { SettingsPasswordComponent } from './settings-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [
    SettingsComponent,
    SettingsOverviewComponent,
    SettingsIdentityComponent,
    SettingsPasswordComponent
  ],
  providers: [AuthService]
})
export class SettingsModule {}
