import { handleActions } from "redux-actions";

import * as action from "../actions";
import { v4 as uuid } from "uuid";
import { startTransition } from "react";

const initialState = {
  todos: [],
};

const todosReducer = handleActions(
  {
    [action.createTodo]: (state, { payload: taskData }) => {
      const copy = structuredClone(state);

      const newTask = {
        id: uuid(),
        text: taskData.taskText,
        isEdited: false,
        isCompleted: false,
      };

      copy.todos.unshift(newTask);

      return copy;
    },

    [action.deleteTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);
      const itemIndexTodoDelete = copy.todos.findIndex(
        ({ id }) => id === taskId
      );
      copy.todos.splice(itemIndexTodoDelete, 1);
      return copy;
    },
    [action.completeTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);
      const foundTodo = copy.todos.find(({ id }) => id === taskId);
      foundTodo.isCompleted = true;
      return copy;
    },
    [action.editTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);
      const foundTodo = copy.todos.find(({ id }) => id === taskId);
      foundTodo.isEdited = true;
      return copy;
    },
    [action.undoTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);
      const foundTodo = copy.todos.find(({ id }) => id === taskId);
      foundTodo.isEdited = false;
      return copy;
    },
    [action.saveTodo]: (state, { payload: updatedTask }) => {
      const { id: taskId, newText } = updatedTask;
      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.text = newText;
      foundTodo.isEdited = false;
      return copy;
    },
  },
  initialState
);

export default todosReducer;
