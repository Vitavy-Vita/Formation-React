import Inputs from './components/Inputs';
import Liste from './components/Liste';
import { useState } from 'react';
function App() {
  const radioOption= ["Include Uppercase Letters", "Include Lowercase Letters", "Include Numbers", "Include Symbols"] 

  return (
    <main className="bg-blue min-h-screen mx:auto">
      <h1 className="text-white text-center ">PassSafe Maker</h1>
      <Inputs/>
      {radioOption.map((options)=>(
        <Liste
        options={options}
        />
      ))}
    </main>
  );
}

export default App;
