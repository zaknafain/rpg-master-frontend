import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared.module';

import { AuthService } from '../services/auth.service';

import { SettingsOverviewComponent } from './settings-overview.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [
    SettingsOverviewComponent,
    SettingsComponent
  ],
  providers: [AuthService]
})
export class SettingsModule {}
