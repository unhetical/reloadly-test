import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/countries',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
