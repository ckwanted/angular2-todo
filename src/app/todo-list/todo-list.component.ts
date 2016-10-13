import { Component, OnInit } from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos : Object[];
  public nuevoTodo : String;

  constructor() {
    this.todos = TodoListService.getTodos();
    this.nuevoTodo = "";
  }

  ngOnInit() {
  }

  insertarTodo() {
    if(this.nuevoTodo.trim().length) {
      this.todos.splice(0, 0, {
        "userId": 1,
        "id": 1,
        "title": this.nuevoTodo,
        "completed": false
      });
      this.nuevoTodo = "";
    }
  }

}
