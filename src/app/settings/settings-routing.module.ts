import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { SettingsComponent } from './settings.component';
import { SettingsOverviewComponent } from './settings-overview.component';
import { SettingsIdentityComponent } from './settings-identity.component';
import { SettingsPasswordComponent } from './settings-password.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SettingsOverviewComponent
      },
      {
        path: 'identity',
        component: SettingsIdentityComponent
      },
      {
        path: 'password',
        component: SettingsPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}
