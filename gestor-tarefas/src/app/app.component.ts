import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ NavigationComponent],
  standalone: true
})
export class AppComponent {
  title = 'Angular Material Toolbar and Side Menu';
}
