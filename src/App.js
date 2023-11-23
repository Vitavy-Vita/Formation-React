import TaskItem from "./components/TaskItem";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useState } from "react";



function App() {
    const [textEntered, setTextEntered] = useState('');
    const [tasks,setTasks] = useState([])    
    const onChangeHandler = function(event){
        setTextEntered(event.target.value)
    }
    const addTaskHandler = function(event){
        event.preventDefault();
        setTasks([...tasks, textEntered])
    }
 
  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <Logo img={'/img/logo.png'}/>

      <Form onChangeHandler={onChangeHandler} addTaskHandler={addTaskHandler}/>

      <section className="mt-10 md:w-2/3 mx-auto ">
        <ul className="flex flex-col space-y-5">
          {tasks.map((item, index) => (
            <TaskItem key={index} name={item}></TaskItem>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default App;