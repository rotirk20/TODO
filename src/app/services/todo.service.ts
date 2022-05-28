import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [
    { name: "Bread", done: false },
    { name: "Milk", done: false },
    { name: "Eggs", done: true },
    { name: "Tea", done: false }
  ];

  getTodos() {
    return this.todos;
  }

}
