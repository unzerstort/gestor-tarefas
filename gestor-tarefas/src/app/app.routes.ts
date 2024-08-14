import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tarefas', component: TasksComponent },
];
