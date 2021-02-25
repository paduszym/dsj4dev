import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';

import {AppContentComponent} from './content/app-content.component';
import {AppFooterComponent} from './footer/app-footer.component';
import {AppHeaderComponent} from './header/app-header.component';

@NgModule({
  imports: [
    RouterModule,
    /**/
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    AppContentComponent,
    AppFooterComponent,
    AppHeaderComponent,
  ],
  exports: [
    AppContentComponent,
    AppFooterComponent,
    AppHeaderComponent,
  ],
})
export class CoreModule {
}
