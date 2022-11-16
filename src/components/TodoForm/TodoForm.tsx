import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { asyncAddTodo } from '../../features/todos/todosSlice';
import { dropdowntoggle } from '../../features/filters/filtersSlice';
import './TodoForm-module.css'

interface ITodoFormProps {
  isOpen: boolean,
}

const TodoForm: React.FC<ITodoFormProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState("");

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();

    const trimmedValue: string = value.trim()
    if (trimmedValue !== "") {
      dispatch(asyncAddTodo(trimmedValue));
      setValue("");
    }
  }

  const handleChange = (evt: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(evt.target.value);
  }

  const handleDropDown = () => {
    dispatch(dropdowntoggle(false));
  }

  return (
    <div className="form-wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input className="todo-form__input"
          ref={input => input && input.focus()}
          name="text"
          placeholder="what needs to be done*"
          value={value}
          onChange={handleChange}
        />
        <div className="todo-form__control">
          <button className={value ? 'btn btn-add' : 'btn btn-add__disabled'} type="submit">&#10010;</button>
          <button className={isOpen ? 'btn btn__dropdown' : 'btn btn__dropdown btn btn__dropdown_isopen'} onClick={handleDropDown}></button>
        </div>
      </form >
    </div >
  );
}

export default TodoForm;