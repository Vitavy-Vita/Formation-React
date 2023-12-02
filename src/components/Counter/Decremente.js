import React from "react";
import { useCounterProvider } from "../../context/CounterContext";

export default function Decremente(props) {
  const value = useCounterProvider();

  return (
    <div className="">
      <button onClick={value.decrementeCounter} className="bg-red-500 px-4">
        --
      </button>
    </div>
  );
}
