import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dsj-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
