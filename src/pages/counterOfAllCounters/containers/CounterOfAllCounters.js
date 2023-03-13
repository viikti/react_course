import React, { useState } from "react";
import Layout from "../components/Layout";
import { v4 as uuid } from "uuid";
import { isEven } from "utils";

const CounterOfAllCounters = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };
    setCounters((state) => {
      const updatedCountersValue = state.map((counter) => {
        return {
          ...counter,
          countValue: isEven(counter.countValue)
            ? counter.countValue + 1
            : counter.countValue,
        };
      });
      updatedCountersValue.push(newCounter);
      return updatedCountersValue;
    });
  };

  const handleCounterRemove = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndexToRemove = countersCopy.findIndex(
        ({ id }) => counterId === id
      );

      countersCopy.splice(counterIndexToRemove, 1);
      return countersCopy.map((counter) => {
        return {
          ...counter,
          countValue: !isEven(counter.countValue)
            ? counter.countValue - 1
            : counter.countValue,
        };
      });
    });
  };

  const handleCounterIncrement = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounterIncrement = countersCopy.find(
        ({ id }) => counterId === id
      );
      foundCounterIncrement.countValue += 1;
      return countersCopy;
    });
  };

  const handleCounterDecrement = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounterDecrement = countersCopy.find(
        ({ id }) => counterId === id
      );
      if (foundCounterDecrement.countValue > 0) {
        foundCounterDecrement.countValue -= 1;
      }

      return countersCopy;
    });
  };

  const handleCounterReset = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounterReset = countersCopy.find(({ id }) => counterId === id);
      foundCounterReset.countValue = 0;
      return countersCopy;
    });
  };

  const handleRemoveAllCounters = () => {
    setCounters([]);
  };
  const totalSum = counters.reduce(
    (result, { countValue }) => result + countValue,
    0
  );
  const average = totalSum / counters.length;

  return (
    <Layout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleCounterRemove={handleCounterRemove}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      handleReset={handleRemoveAllCounters}
      average={average}
      totalSum={totalSum}
    />
  );
};

export default CounterOfAllCounters;
