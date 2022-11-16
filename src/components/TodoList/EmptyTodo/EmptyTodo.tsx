import React from 'react';

interface IEmptyTodoProps {
  isOpen: boolean,
}

const EmptyTodo: React.FC<IEmptyTodoProps> = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'todo-item' : 'todo-items _hidden'}>
      <span className="todo-item__text">
        It's empty here!
      </span>
    </div>
  );
}

export default EmptyTodo;