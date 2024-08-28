import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddtodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localitem: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localitem = localStorage.getItem('todos');
      if (this.localitem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localitem);
      }
    } else {
      this.todos = [];
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  toggletodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }
}