import "./styles/App.css";
import Game from "./components/Game";
import { createContext, useState } from "react";

export const GameContext = createContext();

function App() {
  const [start, setStart] = useState(false);
  return (
    <GameContext.Provider value={{ start, setStart }}>
      <Game />
    </GameContext.Provider>
  );
}

export default App;
