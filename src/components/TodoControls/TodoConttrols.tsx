import React from 'react';
import './TodoControls-module.css'
import { useAppDispatch } from '../../app/hooks';
import { asyncAllCompletedTodo } from '../../features/todos/todosSlice';
import { statusFilterAll, statusFilterActive, statusFilterCompleted } from '../../features/filters/filtersSlice';

interface ITodoControlsProps {
  countCompletedTodos: number,
  selectedFilter: string,
  filteredCompleted: number
}

const TodoControls: React.FC<ITodoControlsProps> = ({ countCompletedTodos, selectedFilter, filteredCompleted }) => {
  const dispatch = useAppDispatch();

  const handleClearAllCompleted = () => {
    if (filteredCompleted === 0) {
      return;
    }

    dispatch(asyncAllCompletedTodo())
  }

  const handleFilteredAll = () => {
    dispatch(statusFilterAll('all'));
  }

  const handleFilteredOnlyActive = () => {
    dispatch(statusFilterActive('active'));
  }

  const handleFilteredOnlyCompleted = () => {
    dispatch(statusFilterCompleted('completed'));
  }

  return (
    <div className="todo-controls">
      <div className="todo-controls__wrapper">
        <span className="todo-controls__count">{countCompletedTodos} items left</span>
        <div className="todo-controls__btn">
          <button
            className={selectedFilter === 'all' ? ' btn btn-block btn-all btn-block__selected' : 'btn btn-block btn-all'}
            onClick={handleFilteredAll}
          >
            All
          </button>
          <button
            className={selectedFilter === 'active' ? ' btn btn-block btn-active btn-block__selected' : 'btn btn-block btn-active'}
            onClick={handleFilteredOnlyActive}
          >
            Active
          </button>
          <button
            className={selectedFilter === 'completed' ? ' btn btn-block btn-completed btn-block__selected' : 'btn btn-block btn-completed'}
            onClick={handleFilteredOnlyCompleted}
          >
            Completed
          </button>
        </div>
        <button className={filteredCompleted ? 'btn btn-clear' : 'btn btn-clear__disabled'} onClick={handleClearAllCompleted}>Clear completed</button>
      </div>
    </div >
  );
}

export default TodoControls;