import { Component } from '@angular/core';
import { DialogButton } from '../dialog/dialog.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DialogButton, MatCardModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
