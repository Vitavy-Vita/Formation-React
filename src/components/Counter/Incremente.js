import React from "react";
import { useCounterProvider } from "../../context/CounterContext";

export default function Incremente(props) {
  const value = useCounterProvider();

  return (
    <div className="">
      <button onClick={value.incrementeCounter} className="bg-green-500 px-4">
        ++
      </button>
    </div>
  );
}
