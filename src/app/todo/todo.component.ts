import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo;

  constructor() {
  }

  ngOnInit() {
  }

  onChangeCheckbox() {
    this.todo.completed = !this.todo.completed;
  }

}
