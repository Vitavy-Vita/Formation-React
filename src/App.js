import {useState} from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const onChangeHandler = function (event) {
    setInputValue(event.target.value);
  };
  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <h1 className="text-slate-50 text-3xl font-bold text-center">ToDo-App</h1>
      <form className="flex justify-around items-center gap-4 ">
        <input
          type="text"
          className="w-full md:w-2/3"
          onChange={onChangeHandler}
          value={inputValue}
        />
        <input
          type="submit"
          value="Add Task"
          className="text-yellow-400 text-xl"
        />
      </form>
      <p className='text-slate-50 text-3xl font-bold'>{inputValue}</p>
    </main>
  );
}

export default App;
