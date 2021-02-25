import {NgModule} from '@angular/core';

import {DhillProfileRoutingModule} from './dhill-profile-routing.module';
import {DhillProfileComponent} from './dhill-profile.component';

@NgModule({
  imports: [
    DhillProfileRoutingModule,
  ],
  declarations: [
    DhillProfileComponent,
  ],
})
export class DhillProfileModule {
}
