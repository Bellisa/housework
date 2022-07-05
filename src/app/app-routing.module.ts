import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eusertype } from 'src/models';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  pathMatch: 'full',
  canActivate: [AuthGuard],
  data: {
    role: Eusertype.ADMIN
  }
}, {
  path: '',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  pathMatch: 'full',
  canActivate: [AuthGuard],
  data: {
    role: Eusertype.USER
  }
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
