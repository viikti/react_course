import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "pages/Todos/reducers";

export const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
  },
});
