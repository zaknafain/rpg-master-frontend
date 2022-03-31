import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './campaigns/campaign-list/campaign-list.component';

const routes: Routes = [
  { path: 'campaigns', component: CampaignListComponent },
  { path: '',   redirectTo: '/campaigns', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
