import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'main-home',
    loadChildren: () =>
      import('./main-home/main-home.module').then((m) => m.MainHomeModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'sing-in',
    loadChildren: () =>
      import('./sing-in/sing-in.module').then((m) => m.SingInModule),
  },
  {
    path: 'accept',
    loadChildren: () =>
      import('./accept/accept.module').then((m) => m.AcceptModule),
  },
  {
    path: 'personal-information',
    loadChildren: () =>
      import('./personal-information/personal-information.module').then(
        (m) => m.PersonalInformationModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
