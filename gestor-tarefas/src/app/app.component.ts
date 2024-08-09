import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDrawerContainer, MatDrawer,  } from "@angular/material/sidenav";
import { MatButtonModule,  } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatDrawerContainer, MatDrawer, MatButtonModule, MatToolbarModule, MatIconModule, MatNavList, MatListItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestor-tarefas';
  showFiller = false;
}
