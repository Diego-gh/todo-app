import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todo } from '../types/todo';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as todo[],
  reducers: {
    getTodos: () => {},
    setTodos: (state, action: PayloadAction<todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: todo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { getTodos, setTodos, addTodo, toggleComplete, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
