import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatCard, MatCardContent, MatButton],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

}
