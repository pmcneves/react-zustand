import { useEffect } from "react";
import Input from "./components/Input";
import People from "./components/People";
import "./index.css";
import { useSettingsStore } from "./store";

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>darkmode</button>
      <p>people</p>
      <People />
      <Input />
    </div>
  );
}

export default App;
