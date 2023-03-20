import { createAction } from "redux-actions";

export const createTodo = createAction(`CREATE_TODO`);
export const deleteTodo = createAction(`DELETE_TODO`);
export const completeTodo = createAction(`COMPLETE_TODO`);
export const editTodo = createAction(`EDIT_TODO`);
export const undoTodo = createAction(`UNDO_TODO`);
export const saveTodo = createAction(`SAVE_TODO`);
