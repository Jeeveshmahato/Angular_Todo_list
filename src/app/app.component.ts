import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { title } from 'node:process';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, CommonModule, RouterLink, RouterLinkActive , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
  constructor() {
    setTimeout(()=>{
      this.title = "TodoList1";
    },1000)
  }
}
