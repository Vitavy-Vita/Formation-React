import { useState, useEffect, useRef, useReducer } from 'react';
import TaskItem from './components/TaskItem';

/* Create reducer qui prend en paramétre de fonction
`state` = c'est un objet qui représente les états locaux
`action` = c'est un objet qui contient 
`type` permettant de définir les différentes action possible
*/
const reducer = function (state, action) {
  switch (action.type) {
    case 'onChange':
      return { textEntered: action.payload };

    case 'addTask':
      return { tasks: [...state.tasks, state.textEntered] };

    default:
      break;
  }
};

function App() {
  const initialValue = { tasks: [], textEntered: '' };
  const [state, dispatch] = useReducer(reducer, initialValue);

  console.log(state);

  const onChangeHandler = (e) =>
    dispatch({ type: 'onChange', payload: e.target.value });

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      {/*       <h1 className="text-slate-50 text-3xl font-bold text-center mb-10">
        TODO APP
      </h1> */}
      {/*  <img src={logo} alt="image" className="block mx-auto" /> */}
      <img src={'/images/logo.png'} alt="image" className="block mx-auto" />

      {/* Input pour taper une tache */}
      <form
        //onSubmit={addTaskHandler}
        className="flex justify-center items-center gap-4">
        <input
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
          onChange={onChangeHandler}
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

      <section className="mt-10 md:w-2/3 mx-auto ">
        <ul className="flex flex-col space-y-5">
          {/* 
          La méthode `map` va parcourrir le liste (tableau) et retourner (afficher) les éléments de la liste (tableau) dans le DOM
          Elle attend une fonction en `callback` la fonction recevra
          chaque élément du tableau via les paramétres
          Donc dans notre exemple `item` représente chaque élément de la liste `tasks`
          */}
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
