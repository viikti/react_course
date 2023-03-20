import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "reduxTodo",
  initialState: initialState,
  reducers: {
    createTodo: (state, { payload: taskData }) => {
      const newTask = {
        id: uuid(),
        text: taskData.taskText,
        isCompleted: false,
        isEdited: false,
      };

      state.todos.unshift(newTask);
    },
    deleteTodo: (state, { payload: taskId }) => {
      const findIndexElement = state.todos.findIndex(({ id }) => id === taskId);

      state.todos.splice(findIndexElement, 1);
    },
    completeTodo: (state, { payload: taskId }) => {
      const foundTodo = state.todos.find(({ id }) => id === taskId);

      foundTodo.isCompleted = true;
    },
    editTodo: (state, { payload: taskId }) => {
      const foundTodo = state.todos.find(({ id }) => id === taskId);

      foundTodo.isEdited = true;
    },
    undoTodo: (state, { payload: taskId }) => {
      const foundTodo = state.todos.find(({ id }) => id === taskId);

      foundTodo.isEdited = false;
    },
    saveTodo: (state, { payload: updatedTask }) => {
      const { id: taskId, newText } = updatedTask;

      const foundTodo = state.todos.find(({ id }) => id === taskId);

      foundTodo.text = newText;

      foundTodo.isEdited = false;
    },
  },
});

export const {
  createTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  undoTodo,
  saveTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
