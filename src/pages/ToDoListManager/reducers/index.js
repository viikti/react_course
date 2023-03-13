import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";
import * as actions from "../actions";
import { completeToDoList, removeToDoList } from "../actions";

const initialState = {
  listTasks: [],
};

const toDoListManager = handleActions(
  {
    [actions.createToDoList]: (state, { payload }) => {
      const newTasks = {
        id: uuid(),
        text: payload,
        isEditing: false,
        isDone: false,
      };
      const copyState = structuredClone(state);
      copyState.listTasks.push(newTasks);
      return copyState;
    },

    [actions.completeToDoList]: (state, { payload: idTask }) => {
      const copyState = structuredClone(state);
      const foundTaskCompleted = copyState.listTasks.find(
        ({ id }) => idTask === id
      );
      foundTaskCompleted.isDone = !foundTaskCompleted.isDone;
      return copyState;
    },

    [actions.removeToDoList]: (state, { payload: idTask }) => {
      const copyState = structuredClone(state);
      const foundTaskIndex = copyState.listTasks.findIndex(
        ({ id }) => idTask === id
      );
      copyState.listTasks.splice(foundTaskIndex, 1);
      return copyState;
    },

    [actions.editToDoList]: (state, { payload: idTask }) => {
      const copyState = structuredClone(state);
      const foundTaskCompleted = copyState.listTasks.find(
        ({ id }) => idTask === id
      );
      foundTaskCompleted.isEditing = !foundTaskCompleted.isEditing;
      return copyState;
    },
  },
  initialState
);

export default toDoListManager;
