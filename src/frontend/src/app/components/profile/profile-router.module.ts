import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChildAddComponent } from './profile-child-add/profile-child-add.component';
import { ProfileOrganizationAddComponent } from './profile-organization-add/profile-organization-add.component';

const routes: Routes = [

  { path: 'profile', redirectTo: 'profile/view', pathMatch: 'full' },
  {
    path: 'profile',
    children: [
      { path: 'view', component: ProfileComponent },
      { path: 'childadd', component: ProfileChildAddComponent },
      { path: 'organizationadd', component: ProfileOrganizationAddComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {}
