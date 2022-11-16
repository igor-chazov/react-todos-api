import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { asyncFetchData } from '../features/todos/todosSlice';
import sort from '../utils/sort';
import { ITodo } from '../types/Todo';

import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import EmptyTodo from '../components/TodoList/EmptyTodo/EmptyTodo';
import TodoControls from '../components/TodoControls/TodoConttrols';

const TodoManger: React.FC = () => {
  let todos = useAppSelector((store: RootState) => store.todos.todos);
  const loader = useAppSelector((store: RootState) => store.todos.loader);
  const error = useAppSelector((store: RootState) => store.todos.error);
  const activedTodos = todos.filter((todo: ITodo) => todo.completed === false);
  const filters = useAppSelector((store: RootState) => store.filters.status);
  const dropdown = useAppSelector((store: RootState) => store.filters.dropdown);
  const dispatch = useAppDispatch();

  todos = sort(todos, 'created');

  useEffect(() => {
    dispatch(asyncFetchData());
  }, [dispatch]);

  const filteredTodos = todos.filter((todo: ITodo) => {
    if (filters === 'active') {
      return !todo.completed;
    } else if (filters === 'completed') {
      return todo.completed;
    }
    return true;
  });

  const filteredCompleted = todos.filter((todo: ITodo) => {
    return todo.completed;
  });

  return (
    <>
      <div className="App">
        <div className="App-wrapper container">
          <div className="todo">
            <h1 className="todo-title">Todos</h1>
            <div className="todo-wrapper">
              {loader && <Loader />}
              <div className={loader ? '_disabled' : ''}>
                <TodoForm isOpen={dropdown} />
                {error.status && !loader && <ErrorMessage message={error.message} />}
                {!error.status && todos.length > 0 && <TodoList todos={filteredTodos} isOpen={dropdown} />}
                {!loader && !error.status && !todos.length && <EmptyTodo isOpen={dropdown} />}
                <TodoControls
                  countCompletedTodos={activedTodos.length}
                  selectedFilter={filters}
                  filteredCompleted={filteredCompleted.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoManger;
