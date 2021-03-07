import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/core/authentication/login/login.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('@core/layout/layout.module').then(m => m.LayoutModule)},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
