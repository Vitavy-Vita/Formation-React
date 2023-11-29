import { useReducer } from 'react';
import Card from './components/Card';
import data from './assets/data';

const initialValue = {
  textEntered: '',
  deckFilter: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case 'onChangeInput': // if(action.type === 'onChangeInput')
      const searchFilter = data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        textEntered: action.payload,
        deckFilter: searchFilter,
      };

    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const onChangeHandler = (event) =>
    dispatch({ type: 'onChangeInput', payload: event.target.value });

  // short circuiting => permet d'évaluer les valeurs données et va choissir la premiere valeur VERIDIQUE
  const decks = state.deckFilter || data;
  
  return (
    <main className="p-10">
      <h1 className="text-2xl text-gray-100 text-center mb-10 uppercase font-mono">
        Characters ⚡️
      </h1>

      <input
        onChange={onChangeHandler}
        type="search"
        className="w-56 mb-8 px-2 rounded py-3"
        placeholder="Search Character "
      />

      <div className="grid md:grid-cols-3 gap-5 ">
        {decks.map((item) => (
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
