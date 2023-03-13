import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./routes/Router";
import MainLayout from "./components/MainLayout/MainLayout";

import "./static/index.css";
import configureStore from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <Router />
      </MainLayout>
    </Provider>
  </BrowserRouter>
);
