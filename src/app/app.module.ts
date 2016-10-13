import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {TodoListService} from "./todo-list.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
