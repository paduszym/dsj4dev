import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DhillProfileComponent} from './dhill-profile.component';

const routes: Routes = [
  /**/
  {
    path: '',
    pathMatch: 'full',
    component: DhillProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DhillProfileRoutingModule {
}
