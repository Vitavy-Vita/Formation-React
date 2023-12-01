import { useCounterProvider } from "../../context/CounterContext";
import Counter from "./Counter";

export default function DisplayCounter() {
  const value = useCounterProvider();

  return(
        
      <Counter/>
  )
 
}
