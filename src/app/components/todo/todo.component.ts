import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  todoItem: any = { name: "", done: false, edit:false };
  edit: boolean = false;
  constructor(private todo: TodoService, public router: Router) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.todos = this.todo.getTodos();
  }

  deleteItem(index: any) {
    this.todos = this.todos.filter((v: any, i: any) => i !== index);
  }

  editItem(todo: any) {
    todo.edit = true;
  }

  updateItem(todo: any) {
    todo.edit = false;
  }

  addItem() {
    this.todos = [this.todoItem, ...this.todos];
    this.todoItem = { name: "", done: false };
  }

}
