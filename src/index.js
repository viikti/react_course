import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";

import "./static/index.css";
import MainLayout from "./components/MainLayout/MainLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainLayout>
      <Router />
    </MainLayout>
  </BrowserRouter>
);
