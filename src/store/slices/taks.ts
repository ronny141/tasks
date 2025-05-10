import { createSlice } from '@reduxjs/toolkit';


export type TelemedicineState = {
  tasks: string[];
};

export const initialState: TelemedicineState = {
  tasks: [],
};


export const task = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    }
  },
});

export const { add } = task.actions;
export default task.reducer;