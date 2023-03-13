import { createAction } from "redux-actions";

export const createToDoList = createAction("CREATE_TO_DO_LIST");
export const completeToDoList = createAction("COMPLETE_TO_DO_LIST");
export const removeToDoList = createAction("REMOVE_TO_DO_LIST");
export const editToDoList = createAction("EDIT_TO_DO_LIST");
export const editToDoListCancel = createAction("EDIT_TO_DO_LIST_CANCEL");
export const editToDoListAccept = createAction("EDIT_TO_DO_LIST_ACCEPT");
