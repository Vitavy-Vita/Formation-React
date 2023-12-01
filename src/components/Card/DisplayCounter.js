import { useCounterProvider } from "../../context/CounterContext";
import Counter from "./Counter";
import Incremente from './Incremente'
import Decremente from "./Decremente";
import Reset from "./Reset";

export default function DisplayCounter() {
  const value = useCounterProvider();

  return (
    <div>
      <Incremente />
      <Decremente />
      <Reset />
      <Counter />
    </div>
  );
}
