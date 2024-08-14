import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  taskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskDetails: new FormControl(''),
    taskDeadline: new FormControl(''),
    taskPriority: new FormControl(''),
    taskPeople: new FormControl(''),
    taskAttachment: new FormControl(''),
  })
}
