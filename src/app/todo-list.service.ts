import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  static getTodos() : Object[] {
    return [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      }
    ];
  }

}
