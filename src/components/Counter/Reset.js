import React from "react";
import { useCounterProvider } from "../../context/CounterContext";

export default function Reset(props) {
  const value = useCounterProvider();

  return (
    <div className="">
      <button onClick={value.clearCounter} className="bg-indigo-500 px-4">
        Clear
      </button>
    </div>
  );
}
