import { combineReducers } from "redux";
import toDoListManager from "../pages/ToDoListManager/reducers";
import todosReducer from "../pages/Todos/reducers";

const rootReducer = () => {
  return combineReducers({
    listManagerPage: toDoListManager,
    todoPage: todosReducer,
  });
};
export default rootReducer;
