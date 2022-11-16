import { createSlice } from '@reduxjs/toolkit';
import { IStatusFilters, IFiltersSlice } from '../../types/Todo';

export const StatusFilters: IStatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
  dropdown: true,
}

const initialState: IFiltersSlice = {
  status: StatusFilters.All,
  dropdown: StatusFilters.dropdown,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterAll: (state, action) => {
      state.status = action.payload;
    },

    statusFilterActive: (state, action) => {
      state.status = action.payload;
    },

    statusFilterCompleted: (state, action) => {
      state.status = action.payload;
    },

    dropdowntoggle: (state, action) => {

      action.payload = (StatusFilters.dropdown = !StatusFilters.dropdown);
      state.dropdown = action.payload;
    },
  },
})

export const { statusFilterAll, statusFilterActive, statusFilterCompleted, dropdowntoggle } = filtersSlice.actions;

export default filtersSlice.reducer;
