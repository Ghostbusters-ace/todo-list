import { TodoType } from 'src/app/core/types/todo-type';
import { Irepo } from './irepo';

export interface TodoRepo extends Irepo<TodoType> {}
