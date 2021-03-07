import { Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { LayoutComponent } from './layout.component';

export const LayoutRouting: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '',   component: HomeComponent },
      { path: 'profile',   component: ProfileComponent }
    ]
  },
];
