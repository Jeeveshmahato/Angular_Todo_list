import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css',
})
export class AddtodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string = '';
  desc: string = '';
  OnSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.todoAdd.emit(todo);
  }
}
