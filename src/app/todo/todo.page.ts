import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage {
  todos: Todo[] = [];
  newTodo: string = '';
  newDescription: string = ''

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      const todo: Todo = {
        id: Date.now(),
        description: this.newDescription,
        title: this.newTodo.trim(),
        date: new Date(),
        completed: false,
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
