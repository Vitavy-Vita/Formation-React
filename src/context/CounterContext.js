import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export default function CounterProvider(props) {
  const [counter, setCounter] = useState(0);

  const incrementeCounter = function () {
    setCounter(counter + 1);
    console.log('hi')
  };
  const decrementeCounter = function () {
    setCounter(counter - 1);
  };
  const clearCounter = function () {
    setCounter(0);
  };

  return (
    <CounterContext.Provider
      value={{
        counter:counter,
        incrementeCounter: incrementeCounter,
        decrementeCounter: decrementeCounter,
        clearCounter: clearCounter,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounterProvider() {
  const value = useContext(CounterContext);
  return value;
}
