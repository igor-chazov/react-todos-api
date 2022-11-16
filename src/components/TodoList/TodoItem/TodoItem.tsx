import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { asyncDeleteTodo, asyncToggleTodo } from '../../../features/todos/todosSlice';
import './TodoItem-module.css'
import checked from '../../../img/check.svg';
import unchecked from '../../../img/uncheck.svg';
import getFormattedDate from '../../../utils/getFormattedDate';

interface ITodoItemProps {
  id: string,
  text: string,
  completed: boolean,
  created: Date
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, completed, created }) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(asyncDeleteTodo(id));
  }

  const handleToggle = () => {
    dispatch(asyncToggleTodo(id));
  }

  return (
    <>
      <div className="todo-item">
        <img
          src={completed ? checked : unchecked}
          alt="completed"
          className="todo-item__radio"
          onClick={handleToggle}
        />
        <div className="todo-item__content">
          <span className={completed ? "todo-item__date completed" : "todo-item__date"}>{getFormattedDate(created)}</span>
          <span className={completed ? "todo-item__text completed" : "todo-item__text"} >{text}</span>
        </div>
        <button className="todo-item__delete" onClick={handleDelete}></button>
      </div >
    </>
  );
}

export default TodoItem;