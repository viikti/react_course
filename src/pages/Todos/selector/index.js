import { createSelector } from "@reduxjs/toolkit";

// const baseSelector = (state) => state.todoReducer;
//
// export const todosSelector = createSelector(
//   baseSelector,
//   (todosReducer) => todosReducer.todos
// );

const todoSelector = (store) => store.todoReducer;

export const todosList = createSelector(
  todoSelector,
  (todosReducer) => todosReducer.todos
);
