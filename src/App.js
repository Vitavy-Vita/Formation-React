import Title from "./components/Title";
import Inputs from "./components/Inputs";
import TipValue from "./components/TipValue";
import Total from "./components/Total";
import CustomTip from "./components/CustomTip";
import { useState } from "react";

function App() {
  const [sumEntered, setSumEntered] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
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
    setCustomTip("")
    setTipPerPeople(value);
    console.log(value);
  };
  const getCustomValue = function (event) {
    setTipPerPeople(0)

    const customTipValue = event.target.value;
    const customTipPercentage = parseFloat(customTipValue);

    if (!isNaN(customTipPercentage)) {
      setTipPerPeople(customTipPercentage);
      setCustomTip(customTipPercentage);
    } else {
      setTipPerPeople(0);
    }
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
    document.location.reload();
  };

  return (
    <main className="bg-blue-500 min-h-screen mx:auto w-full text-center content-center">
      <Title name={"TIPTOP CALC"} />
      <div
        className="flex justify-center items-center
      "
      >
        <section className="flex justify-center items-center bg-slate-100 max-w-screen-md rounded">
          <article className=" ">
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
                  tip={tipPerPeople}
                  onClickHandler={() => getValue(value)}
                />
              ))}
              <CustomTip
                placeholder={"CUSTOM"}
                onSubmitHandler={getCustomValue}
                value={customTip}
                tipPerPeople={tipPerPeople}
              />
            </section>
            <Inputs
              title={"Number of People"}
              iconType={"person"}
              onSubmitHandler={getNumberOfPeople}
              value={numberOfPeople}
            />
          </article>
          <article className="bg-blue-500 m-10 py-20 rounded">
            <Total
              value={displayTotalTip()}
              title={`Tip Amount
        /person`}
            />
            <Total
              value={displayTotal()}
              title={`Total
        /person`}
            />
            <button
              className="bg-slate-100 text-blue-500 px-20 rounded-sm hover:text-blue-800 hover:bg-slate-300"
              onClick={handleReset}
            >
              RESET
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
