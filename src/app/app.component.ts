import { Component } from '@angular/core';
import { BaseComponent } from './core/components/base/base.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'RampApp';
  isMenuOpened = false;
}
