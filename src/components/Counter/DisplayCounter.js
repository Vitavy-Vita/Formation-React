import { useCounterProvider } from "../../context/CounterContext";
// import Counter from "./Counter";
import Incremente from "./Incremente";
import Decremente from "./Decremente";
import Reset from "./Reset";

export default function DisplayCounter() {
  const value = useCounterProvider();

  return (
    <div >
      <h2>My Counter : {value.counter}</h2>
      <div className="flex  gap-2">
        <Incremente />
        <Decremente />
        <Reset />
      </div>
      {/* <Counter /> */}
    </div>
  );
}
