import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import { TodoType } from 'src/app/core/types/todo-type';
import { TodoRepo } from '../todo-repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService implements TodoRepo {
  todos: TodoType[] = [];

  constructor(private _dbService: NgxIndexedDBService) {}

  findAll(): Observable<Array<TodoType>> {
    return this._dbService.getAll('todos');
  }

  findOne(id: number): Observable<TodoType> {
    return this._dbService.getByID('todos', id);
  }

  add(datas: TodoType): Observable<TodoType> {
    return this._dbService.add('todos', datas);
  }

  update(datas: TodoType): Observable<any> {
    return this._dbService.update('todos', datas);
  }

  delete(datas: number | TodoType): Observable<any> {
    let id: number;

    if (datas.hasOwnProperty('id')) {
      id = (datas as TodoType).id!;
    } else {
      id = datas as number;
    }

    return this._dbService.deleteByKey('todos', id);
  }
}
