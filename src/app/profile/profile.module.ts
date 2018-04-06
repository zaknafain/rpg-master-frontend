import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { AuthService } from '../services/auth.service';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [AuthService]
})
export class ProfileModule {}
