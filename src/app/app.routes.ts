import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';
export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];
