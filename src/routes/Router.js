import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterCountainer";
import counterOfAllCounters from "../pages/counterOfAllCounters/containers/CounterOfAllCounters";
import CounterOfAllCounters from "../pages/counterOfAllCounters/containers/CounterOfAllCounters";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTER_OF_COUNTERS}
        element={<CounterOfAllCounters />}
      />
      <Route
        path={ROUTE_NAMES.FUNCTION_COUNTER}
        element={<FunctionalCounterContainer />}
      />
    </Routes>
  );
};

export default Router;
