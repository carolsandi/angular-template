import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutRouting } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '@app/home/home.component';
import { ProfileComponent } from '@app/profile/profile.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [CommonModule, RouterModule.forChild(LayoutRouting)]
})
export class LayoutModule { }
