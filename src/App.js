import React from "react";
import Card from "./components/Card";
import data from "./assets/data";
import { useReducer } from "react";
const initialeValue = {
  textEntered: "",
  searchChar: data,
};
const reducer = function (state, action) {
  switch (action.type) {
    case "onChange":
      const searchArr = data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, textEntered: action.payload, searchChar: searchArr };
    default:
      break;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialeValue);

  const handleChange = function (e) {
    dispatch({ type: "onChange", payload: e.target.value });
  };
  return (
    <main className="p-10">
      <h1 className="text-2xl text-gray-100 text-center mb-10 uppercase font-mono">
        Characters ⚡️
      </h1>
      <form action="" onChange={handleChange}>
        <input type="text" onChange={handleChange} />
      </form>
      <div className="grid md:grid-cols-3 gap-5 ">
        {state.searchChar.map((item) => (
          <Card
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
