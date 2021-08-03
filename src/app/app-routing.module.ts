import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/login/login.module').then((m) => m.LoginModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/menu/menu.module').then((m) => m.MenuModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/register/register.module').then((m) => m.RegisterModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/poc/poc.module').then((m) => m.PocModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
