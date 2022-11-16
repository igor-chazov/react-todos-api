import React from 'react';
import { ITodo } from '../../types/Todo';
import TodoItem from './TodoItem/TodoItem';

interface ITodoListProps {
  todos: Array<ITodo>,
  isOpen: boolean,
}

const TodoList: React.FC<ITodoListProps> = ({ todos, isOpen }) => {
  return (
    <div className={isOpen ? 'todo-items' : 'todo-items _hidden'}>
      {todos.map((todo: ITodo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            created={todo.created}
          />
        );
      })}
    </div>
  );
}

export default TodoList;