import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared.module';

import { AuthService } from '../services/auth.service';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [AuthService]
})
export class ProfileModule {}
