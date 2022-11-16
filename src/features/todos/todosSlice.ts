import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodosSlice, ITodo } from '../../types/Todo';
import { client } from '../../api/client/client';
import links from '../../utils/links';

const initialState: ITodosSlice = {
  todos: [],
  loader: false,
  error: {
    message: '',
    status: false,
  }
}

export const asyncFetchData = createAsyncThunk(
  'todos/fetchingData',
  async () => {
    const response = await client.get(links.api);
    return response.data
  }
)

export const asyncDeleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string) => {
    const response = await client.delete(links.api + '/' + id);
    return response.data;
  }
)

export const asyncAddTodo = createAsyncThunk(
  'todos/addTodo',
  async (payload: string) => {
    const response = await client.post(links.api, { text: payload });
    return response.data
  }
)

export const asyncToggleTodo = createAsyncThunk(
  'todos/toggleTodo',
  async (id: string) => {
    const response = await client.put(links.api + '/' + id);
    return response.data;
  }
)

export const asyncAllCompletedTodo = createAsyncThunk(
  'todos/allCompletedTodo',
  async () => {
    const response = await client.put(links.api);
    return response.data;
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(asyncFetchData.pending,
      (state) => {
        state.loader = true;
        state.error = {
          message: '',
          status: false,
        }
      }
    );

    builder.addCase(asyncFetchData.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.todos = [...action.payload];
        state.loader = false;
      }
    );

    builder.addCase(asyncFetchData.rejected,
      (state, action) => {
        state.loader = false;
        state.error = {
          message: String(action.error.message),
          status: true,
        }
      }
    );

    builder.addCase(asyncDeleteTodo.pending,
      (state) => {
        state.loader = true;
        state.error = {
          message: '',
          status: false,
        }
      }
    );

    builder.addCase(asyncDeleteTodo.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.todos = [...action.payload];
        state.loader = false;
      }
    );

    builder.addCase(asyncDeleteTodo.rejected,
      (state, action) => {
        state.loader = false;
        state.error = {
          message: String(action.error.message),
          status: true,
        }
      }
    );

    builder.addCase(asyncAddTodo.pending,
      (state) => {
        state.loader = true;
        state.error = {
          message: '',
          status: false,
        }
      }
    );

    builder.addCase(asyncAddTodo.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.todos = [...action.payload];
        state.loader = false;
      }
    );

    builder.addCase(asyncAddTodo.rejected,
      (state, action) => {
        state.loader = false;
        state.error = {
          message: String(action.error.message),
          status: true,
        }
      }
    );

    builder.addCase(asyncToggleTodo.pending,
      (state) => {
        state.loader = true;
        state.error = {
          message: '',
          status: false,
        }
      }
    );

    builder.addCase(asyncToggleTodo.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.todos = [...action.payload];
        state.loader = false;
      }
    );

    builder.addCase(asyncToggleTodo.rejected,
      (state, action) => {
        state.loader = false;
        state.error = {
          message: String(action.error.message),
          status: true,
        }
      }
    );

    builder.addCase(asyncAllCompletedTodo.pending,
      (state) => {
        state.loader = true;
        state.error = {
          message: '',
          status: false,
        }
      }
    );

    builder.addCase(asyncAllCompletedTodo.fulfilled,
      (state, action: PayloadAction<ITodo[]>) => {
        state.todos = [...action.payload];
        state.loader = false;
      }
    );

    builder.addCase(asyncAllCompletedTodo.rejected,
      (state, action) => {
        state.loader = false;
        state.error = {
          message: String(action.error.message),
          status: true,
        }
      }
    );

  })
})

export default todosSlice.reducer;
