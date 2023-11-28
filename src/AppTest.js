import { useReducer, useEffect } from "react";
import TaskItem from "./components/TaskItem";

/* Create reducer qui prend en paramétre de fonction
`state` = c'est un objet qui représente les états locaux
`action` = c'est un objet qui contient 
`type` permettant de définir les différentes action possible
*/
const reducer = function (state, action) {
  switch (action.type) {
    case "onChangeTasks":
      return { ...state, textEntered: action.payload };
    case "onChangeSearch":
      return { ...state, searchText: action.payload };
    case "getLocalStorage":
      const tasksLocalStorage = JSON.parse(localStorage.getItem("my-tasks"));
      return { ...state, tasks: tasksLocalStorage };
    case "addTask":
      const newArr = [...state.tasks, state.textEntered];
      localStorage.setItem("my-tasks", JSON.stringify(newArr));
      return { tasks: newArr, textEntered: "" };
    case "removeTasks":
      const arr= [...state.tasks];
      arr.splice(action.payload, 1)
      localStorage.setItem('my-tasks', JSON.stringify(arr));
      return { ...state, tasks: arr };
    
    default:
      break;
  }
};

function App() {
  const initialValue = { tasks: [], textEntered: "" };
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    dispatch({ type: "getLocalStorage" });
  }, []);

  const addTaskHandler = function (e) {
    e.preventDefault();
    dispatch({ type: "addTask" });
  };

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <img src={"/images/logo.png"} alt="image" className="block mx-auto" />

      <form
        onSubmit={addTaskHandler}
        className="flex justify-center items-center gap-4"
      >
        <input
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
          onChange={(e) =>
            dispatch({ type: "onChangeTasks", payload: e.target.value })
          }
          value={state.textEntered}
          type="text"
          className="w-full md:w-2/3"
          // ref={inputRef}
        />
        <input
          type="submit"
          value="Add Task"
          className="text-yellow-400 text-2xl"
        />
      </form>
      <form
        // onSubmit={handleSearch}
        className="flex justify-center items-center gap-4"
      >
        <input
          onChange={(e) =>
            dispatch({ type: "onChangeSearch", payload: e.target.value })
          }
          value={state.searchText}
          type="text"
          className="w-full md:w-2/3"

        />
        <input
          type="submit"
          value="Search Task"
          className="text-yellow-400 text-2xl"
        />
      </form>

      <section className="mt-10 md:w-2/3 mx-auto ">
        <ul className="flex flex-col space-y-5">
          {state.tasks.map((item, index) => (
            <TaskItem
              key={index}
              name={item}
              removeItem={() =>
                dispatch({ type: "removeTasks", payload: index })
              }
            ></TaskItem>
          ))}
        </ul>
      </section>
    </main>
  );
}

/* 

Créer un composant nommé `TaskItem` qui représente le UI de chaque `item`
de la liste `tasks` 



*/

export default App;
