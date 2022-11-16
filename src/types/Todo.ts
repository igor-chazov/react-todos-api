export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  created: Date;
}

export interface ITodosSlice {
  todos: ITodo[],
  loader: boolean
  error: {
    message: string,
    status: boolean,
  }
}

export interface IStatusFilters {
  All: string,
  Active: string,
  Completed: string,
  dropdown: boolean,
}

export interface IFiltersSlice {
  status: string;
  dropdown: boolean,
}
