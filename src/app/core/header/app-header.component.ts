import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'dsj-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
}
