import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {DhillProfileRoutingModule} from './dhill-profile-routing.module';
import {DhillProfileComponent} from './dhill-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    /**/
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    /**/
    DhillProfileRoutingModule,
  ],
  declarations: [
    DhillProfileComponent,
  ],
})
export class DhillProfileModule {
}
