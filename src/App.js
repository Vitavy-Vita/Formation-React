import { useState } from 'react';
import TaskItem from './components/TaskItem';
import Title from "./components/Title";
// import Form from './components/Form';

function App() {
  // 1 er sera la valeur de votre state
  // 2e sera la fonction qui permet de mettre à jour le state
  // TOUJOURS LE DÉCLARER AU TOP DE LA FONCTION 💥
  const [textEntered, setTextEntered] = useState('');
  const [tasks, setTasks] = useState([]);

  const onChangeHandler = function (event) {
    // event.target => document.querySelector('input)
    // `event.target.value` permet de récuperer la valeur d'un input
    // 👆 Il fonctionne qu'avec les balises formulaires (input, select)
    // event.target.classList.add('red') // ajoute la class `red` quand on entre une saissie
    setTextEntered(event.target.value);
  };

  const addTaskHandler = function (event) {
    // A ajouter pour TOUT formulaire utilisant une balise `form`
    // Elle permet de ne pas recharger la page au submit
    event.preventDefault();
    // NE PAS UTILISER AINSI QUAND ON VEUT METTRE A JOUR UNE LISTE
    // tasks.push(textEntered);

    // La bonne méthode : utiliser le `spread operator` qui permet de copier
    // une liste (tableau) puis ajouter le nouvelle tâche
    setTasks([...tasks, textEntered]);
  };
  console.log(tasks);

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      <Title name={'ToDo-App'}/>

      {/* Input pour taper une tache */}
      <form
        onSubmit={addTaskHandler}
        className="flex justify-center items-center gap-4">
        <input
          // A chaque saisi sur le input la fonction est rééxecuter
          // Avec le paramétre `event` on peut accéder à l'élément `input`
          // Donc à sa valeur `event.target.value`
          onChange={onChangeHandler}
          type="text"
          className="w-full md:w-2/3"
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
          {tasks.map((item, index) => (
            /* 
            La propriété `key` est utilisée pour identifier
            chaque élément enfant générer par la méthode `map`
            */
          //  <Form />
            <TaskItem key={index} name={item}/>
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
