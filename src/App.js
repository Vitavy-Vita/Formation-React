import Title from "./components/Title";
import Inputs from "./components/Inputs";
import TipValue from "./components/TipValue";
import Total from "./components/Total";
import CustomTip from "./components/CustomTip";
import { useState } from "react";

function App() {
  const [sumEntered, setSumEntered] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customTip, setCustomTip] = useState("");
  const [tipPerPeople, setTipPerPeople] = useState(0);
  const tipValues = [5, 10, 15, 20, 50];
  const onSubmitHandler = function (event) {
    setSumEntered(event.target.value);
  };

  const getNumberOfPeople = function (event) {
    setNumberOfPeople(event.target.value);
  };

  const getValue = function (value) {
    setTipPerPeople(value);
    console.log(value);
  };
  const getCustomValue = function (event) {
    setCustomTip(event.target.value);
    console.log(customTip)
  };
  
  const displayTotal = function () {
    if (sumEntered && tipPerPeople && numberOfPeople) {
      const bill = parseFloat(sumEntered);
      const people = parseFloat(numberOfPeople);
      const tip = tipPerPeople;
      const totalTips = bill * (tip / 100);
      const total = (bill / people + totalTips).toFixed(2);

      return total;
    } else {
      return "0";
    }
  };

  const displayTotalTip = function () {
    if (sumEntered && tipPerPeople && numberOfPeople) {
      const bill = parseFloat(sumEntered);
      const people = parseFloat(numberOfPeople);
      const tip = tipPerPeople;
      const totalTips = bill * (tip / 100);
      const total = (totalTips / people).toFixed(2);

      return total;
    } else {
      return "0";
    }
  };

  const handleReset = function () {
    setTipPerPeople("0.00");
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
            {tipValues.map((value) => (
              <TipValue
                key={value}
                value={value}
                onClickHandler={() => getValue(value)}
              />
            ))}
            <CustomTip
              placeholder={"Custom"}
              onSubmitHandler={getCustomValue}
              value={customTip}
            />
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
            value={displayTotalTip()}
            title={`Tip Amount
        /person`}
          />
          <Total
            onChange={displayTotal}
            value={displayTotal()}
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
