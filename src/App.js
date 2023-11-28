import Inputs from "./components/Inputs";
import Liste from "./components/Liste";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0, 20);

  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleUpperCase = function () {
    setIncludeUppercase(!includeUppercase);
  };
  const handleLowerCase = function () {
    setIncludeLowercase(!includeLowercase);
  };
  const handleNumbers = function () {
    setIncludeNumbers(!includeNumbers);
  };
  const handleSymbols = function () {
    setIncludeSymbols(!includeSymbols);
  };
  const generatePassword = function () {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}";

    let validChars = lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += specialChars;

    const newPassword = Array.from({ length: length }, () => {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      return validChars.charAt(randomIndex);
    }).join("");

    setPassword(newPassword);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <main className="bg-blue min-h-screen mx:auto">
      <h1 className="text-white text-center ">PassSafe Maker</h1>
      <section className="bg-white w-2/4 ">
        <Inputs value={password} />
        <FaRegCopy
          className=""
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        />
        <h2>Character Length: {length}</h2>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            max={20}
            track={false}
            value={length}
            onChange={(e, newValue) => {
              setLength(newValue);
            }}
          />
        </Box>

        <Liste
          options={"include Uppercase Letters"}
          onChange={handleUpperCase}
          value={includeUppercase}
        />
        <Liste
          options={"include Lowercase Letters"}
          onChange={handleLowerCase}
          value={includeLowercase}
        />
        <Liste
          options={"include Numbers"}
          onChange={handleNumbers}
          value={includeNumbers}
        />
        <Liste
          options={"include Symbols"}
          onChange={handleSymbols}
          value={includeSymbols}
        />

        <button
          onClick={generatePassword}
          className="bg-blue text-white p-2 m-2 rounded"
        >
          Generate Password
        </button>
      </section>
    </main>
  );
}

export default App;
