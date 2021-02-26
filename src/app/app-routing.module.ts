import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  /**/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  /**/
  {
    path: 'home',
    loadChildren: () => import('./+home/home.module').then(m => m.HomeModule),
  },
  /**/
  {
    path: 'dhill-profile',
    loadChildren: () => import('./+dhill-profile/dhill-profile.module').then(m => m.DhillProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
})
export class AppRoutingModule {
}
