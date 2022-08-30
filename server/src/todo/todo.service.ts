import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: '11',
      title: 'this is title',
      description: 'this is description',
      status: TodoStatus.NEW,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOneById(id: string): Todo {
    const result = this.todos.find((todo) => id === todo.id);
    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }
}
