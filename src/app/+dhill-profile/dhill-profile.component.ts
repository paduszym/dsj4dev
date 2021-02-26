import {ChangeDetectionStrategy, Component} from '@angular/core';

import {DhillFormula, DhillProfileInput, getDhillFormula} from './dhill-profile.api';

@Component({
  selector: 'dsj-dhill-profile',
  templateUrl: './dhill-profile.component.html',
  styleUrls: ['./dhill-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DhillProfileComponent {

  profile: DhillProfileInput = new DhillProfileInput();

  formula: DhillFormula;

  _generate(): void {
    console.log(this.profile);
    this.formula = getDhillFormula(this.profile);
  }
}
