import { useReducer, useEffect } from "react";
import TaskItem from "./components/TaskItem";

/* Create reducer qui prend en paramétre de fonction
`state` = c'est un objet qui représente les états locaux
`action` = c'est un objet qui contient 
`type` permettant de définir les différentes action possible
*/
const reducer = function (state, action) {
  switch (action.type) {
    case "onChange":
      if (state.tasksFilter && action.payload === "") {
        return { ...state, tasksFilter: null, textEntered: action.payload };
      }
      return { ...state, textEntered: action.payload };
    case "getLocalStorage":
      const tasksLocalStorage = JSON.parse(localStorage.getItem("my-tasks"));
      if (tasksLocalStorage) {
        return { ...state, tasks: tasksLocalStorage };
      } else {
        return { ...state };
      }
    case "addTask":
      const newArr = [...state.tasks, state.textEntered];
      localStorage.setItem("my-tasks", JSON.stringify(newArr));
      return { tasks: newArr, textEntered: "" };
    case "removeTasks":
      const originalArr = [...state.tasks];
      const filteredArr = state.tasksFilter
        ? [...state.tasksFilter]
        : originalArr;

      filteredArr.splice(action.payload.index, 1);
      originalArr.splice(originalArr.indexOf(action.payload.item), 1);
      localStorage.setItem("my-tasks", JSON.stringify(originalArr));
      return {
        ...state,
        tasks: originalArr,
        tasksFilter: state.tasksFilter ? filteredArr : null,
      };
    case "searchTasks":
      const searchArr = state.tasks.filter((textEntered) => {
        return textEntered
          .toLowerCase()
          .includes(state.textEntered.toLowerCase());
      });
      return { ...state, tasksFilter: searchArr };
    default:
      break;
  }
};

function App() {
  const initialValue = {
    tasks: [],
    textEntered: "",
    tasksFilter: null,
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    dispatch({ type: "getLocalStorage" });
  }, []);

  const addTaskHandler = function (e) {
    e.preventDefault();
    dispatch({ type: "addTask" });
  };
  const searchTaskHandler = function (e) {
    e.preventDefault();
    dispatch({ type: "searchTasks", payload: e.target.value });
  };
  const tasks = state.tasksFilter || state.tasks;
  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <img src={"/images/logo.png"} alt="image" className="block mx-auto" />

      <form
        onSubmit={addTaskHandler}
        className="flex justify-center items-center gap-4"
      >
        {/* <input
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
          onChange={(e) =>
            dispatch({ type: "onChangeTasks", payload: e.target.value })
          }
          value={state.textEntered}
          type="text"
          className="w-full md:w-2/3"

        /> */}
        <input
          type="submit"
          value="Add Task"
          className="text-yellow-400 text-2xl"
        />
      </form>
      <form
        onClick={searchTaskHandler}
        className="flex justify-center items-center gap-4"
      >
        <input
          onChange={(e) =>
            dispatch({ type: "onChange", payload: e.target.value })
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
          {tasks.map((item, index) => (
            <TaskItem
              key={index}
              name={item}
              removeItem={() =>
                dispatch({ type: "removeTasks", payload: { index, item } })
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
