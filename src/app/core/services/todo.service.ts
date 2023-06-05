import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { TodoType } from '../types/todo-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _httpClient: HttpClient) {}

  public findAll(): Observable<Array<TodoType>> {
    const endPoint: string = `${environment.apiRoot}todos`;

    return this._httpClient.get<TodoType[]>(endPoint);
  }
}
