import { useState, useEffect, useCallback } from "react";
import CounterView from "commonComponents/CounterView";
import { useCounter } from "hooks";

const FunctionalCounterContainer = () => {
  // const [countValue, setCountValue] = useState(0)
  const { countValue, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);

  // const handleIncrement = () => {
  //   setCount((state) => state + 1);
  // };
  // const handleDecrement = () => {
  //   setCount((state) => state - 1);
  // };
  // const handleReset = () => {
  //   setCount(0);
  // };
  return (
    <CounterView
      counterValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
