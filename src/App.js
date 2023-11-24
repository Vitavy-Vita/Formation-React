import TaskItem from "./components/TaskItem";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useEffect, useState } from "react";


function App() {
  const [textEntered, setTextEntered] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("my-tasks"));

    setTasks(taskList);
  }, []);

  const onChangeHandler = function (event) {
    setTextEntered(event.target.value);
  };
  const addTaskHandler = function (event) {
    event.preventDefault();
    const newArr = [...tasks, textEntered];
    setTasks(newArr);

    localStorage.setItem("my-tasks", JSON.stringify(newArr));
    
  };
  const removeItem = function (index) {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
    localStorage.setItem("my-tasks", JSON.stringify(newArr));
  };
  

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <Logo img={"/img/logo.png"} />

      <Form onChangeHandler={onChangeHandler} addTaskHandler={addTaskHandler}  />

      <section className="mt-10 md:w-2/3 mx-auto ">
        <ul className="flex flex-col space-y-5">
          {tasks.map((item, index) => (
            <TaskItem
              key={index}
              removeItem={() => removeItem(index)}
              name={item}
            ></TaskItem>
          ))}

        </ul>
      </section>
    </main>
  );
}
export default App;
