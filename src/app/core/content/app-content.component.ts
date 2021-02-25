import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dsj-app-content',
  templateUrl: './app-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppContentComponent {
}
