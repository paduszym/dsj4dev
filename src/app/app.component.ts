import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dsj-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
