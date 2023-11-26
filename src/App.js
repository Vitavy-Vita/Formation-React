import Title from "./components/Title";
import Inputs from "./components/Inputs";
import TipValue from "./components/TipValue";
import Total from "./components/Total";
import { useState, useEffect } from "react";

function App() {
  const [sumEntered, setSumEntered] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [tipPerPeople, setTipPerPeople] = useState(0);
  const tipValues = [0.05, 0.1, 0.15, 0.2, 0.5];
  const onSubmitHandler = function (event) {
    setSumEntered(event.target.value);
  };

  const getNumberOfPeople = function (event) {
    setNumberOfPeople(event.target.value);
  };

  const getValue = function (value) {
    return value;
  };

  useEffect(() => {
    displayTotal();
    setTipPerPeople();
  }, [sumEntered, numberOfPeople, tipPerPeople]);

  const displayTotal = function () {
    if (sumEntered === "" || numberOfPeople === 0) {
      return totalPerPerson;
    }

    const bill = parseFloat(sumEntered);
    const people = parseFloat(numberOfPeople);
    const tip = parseFloat(tipPerPeople);
    const totalTips = bill * (getValue(tip) / 100);
    setTipPerPeople(totalTips / people);
    console.log(tip);
    const total = (bill / people).toFixed(2) + tip;
    setTotalPerPerson(total);

    return total;
  };

  const handleReset = function () {
    setTotalPerPerson("0.00");
    setSumEntered("");
    setNumberOfPeople(1);
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
            value={tipPerPeople}
            title={`Tip Amount
        /person`}
          />
          <Total
            onChange={displayTotal}
            value={totalPerPerson}
            title={`Total
        /person`}
          />
          <button className="bg-slate-100" onClick={handleReset}>
            Reset
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
