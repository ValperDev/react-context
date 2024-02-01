import { createContext, useState } from 'react'
import './App.css'
import Child from './components/Child';

export const theme = createContext();

function App() {
  const [toggle, setToggle] = useState("light");
  const handleToggle = () => {
    setToggle(toggle === "light" ? "dark" : "light");
  }
  return (
    <theme.Provider value={toggle}>
      <div>
        <h1>Parent component</h1>
        <button onClick={handleToggle}>toggle</button>
      </div>
      <Child/>
    </theme.Provider>
  )
}

export default App
