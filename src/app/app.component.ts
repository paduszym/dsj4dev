import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dsj-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
