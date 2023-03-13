import { combineReducers } from "redux";
import toDoListManager from "../pages/ToDoListManager/reducers";

const rootReducer = () => {
  return combineReducers({
    listManagerPage: toDoListManager,
  });
};
export default rootReducer;
