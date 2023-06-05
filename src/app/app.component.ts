import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TodoType } from './core/types/todo-type';
import { TodoService } from './core/services/todo.service';
import { RepositoryService } from './data/interfaces/impl/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: Array<TodoType> = [];
  date = new Date();

  private tab: TodoType = {
    id: 3,
    title: 'Configure Electron',
    createdAt: this.date,
    done: true,
  };

  public constructor(
    private _todoService: TodoService,
    private j: RepositoryService
  ) {}

  ngOnInit(): void {
    this._todoService
      .findAll()
      .pipe(take(1))
      .subscribe((todos: Array<TodoType>) => {
        this.todos = todos;
      });
    this.j
      .add(this.tab)
      .pipe(take(1))
      .subscribe((tado: TodoType) => {
        console.log('====================================');
        console.log(tado);
        console.log('====================================');
      });
    this.j
      .findAll()
      .pipe(take(1))
      .subscribe((todos: Array<TodoType>) => {
        this.todos = todos;
      });
  }
}
