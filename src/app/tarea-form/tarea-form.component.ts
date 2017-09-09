import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ]
  constructor() { }
}
