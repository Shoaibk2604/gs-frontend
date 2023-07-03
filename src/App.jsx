import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Home from "./pages/Home";

export const UserContext = createContext();

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ active, setActive }}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
