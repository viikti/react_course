import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const configureStore = () => {
  const store = createStore(rootReducer(), composeWithDevTools());
  return store;
};
export default configureStore;
