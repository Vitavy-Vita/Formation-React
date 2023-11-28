import Inputs from "./components/Inputs";
import Liste from "./components/Liste";
import { useState } from "react";
function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers,setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const radioOption = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  const generatePassword = function () {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}";

    let validChars = lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += specialChars;

    const newPassword =  Array.from({length}, () => {
      const randomIndex = Math.floor(Math.random()* validChars.length)
      return validChars.charAt(randomIndex)
    }).join('')

    setPassword(newPassword)
  };

  return (
    <main className="bg-blue min-h-screen mx:auto">
      <h1 className="text-white text-center ">PassSafe Maker</h1>
      <section className="bg-white w-2/4 ">
      <Inputs value={password}/>

        <button onClick={generatePassword}
        className="bg-blue text-white p-2 m-2 rounded">Generate Password</button>
        </section>
    </main>
  );
}

export default App;
