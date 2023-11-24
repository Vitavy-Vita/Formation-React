import Title from "./components/Title";
import Inputs from "./components/Inputs";
import TipValue from "./components/TipValue";
import Total from "./components/Total";
import { useState } from "react";

function App() {
  const [sumEntered, setSumEntered] = useState("");
  const onSubmitHandler = function (event) {
    setSumEntered(event.target.value);
    console.log(sumEntered);
  };

  return (
    <main className="bg-blue-500 min-h-screen text-center">
      <Title name={"TIPTOP CALC"} />
      <section className="flex justify-between items-center bg-slate-100">
        <article className=" md:w-2/3 mx:auto">
          <Inputs
            title={"Bill"}
            iconType={"dollar"}
            onSubmitHandler={onSubmitHandler}
            value={sumEntered}
          />

          <TipValue title={"Select tip %"} />

          <Inputs
            title={"Number of People"}
            iconType={"person"}
            onSubmitHandler={onSubmitHandler}
            value={sumEntered}
          />
        </article>
        <article className="bg-blue-500 m-10 py-20">
          <Total
            title={`Tip Amount
        /person`}
          />
          <Total
            title={`Total
        /person`}
          />
          <button className="bg-slate-100">Reset</button>
        </article>
      </section>
    </main>
  );
}

export default App;
