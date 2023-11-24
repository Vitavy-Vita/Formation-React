import Title from "./components/Title";
import Inputs from "./components/Inputs";
import TipValue from "./components/TipValue";
import Total from "./components/Total";
import { useState } from "react";

function App() {
  const [sumEntered, setSumEntered] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const tipValues = [5, 10, 15, 20, 50];
  const onSubmitHandler = function (event) {
    setSumEntered(event.target.value);
    console.log(sumEntered);
  };
  const getNumberOfPeople = function (event) {
    setNumberOfPeople(event.target.value);
    console.log(numberOfPeople);
  };
  const getValue = function (value) {
    return console.log(value);
  };

  const displayTotal = function () {
    const billAmount = parseFloat(onSubmitHandler())
    const amountPerPerson = billAmount / getNumberOfPeople();
    return amountPerPerson
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
          <h2 className="text-start mx-5">Select Tip %</h2>
          <section className="grid grid-cols-3 gap-4">
            {tipValues.map((value, index) => (
              <TipValue key={index} value={value} onClick={getValue(value)} />
            ))}
          </section>
          <Inputs
            title={"Number of People"}
            iconType={"person"}
            onSubmitHandler={getNumberOfPeople}
            value={numberOfPeople}
            
          />
        </article>
        <article className="bg-blue-500 m-10 py-20">
          <Total
          
            title={`Tip Amount
        /person`}
          />
          <Total
          onChange={displayTotal}
          value={displayTotal}
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
