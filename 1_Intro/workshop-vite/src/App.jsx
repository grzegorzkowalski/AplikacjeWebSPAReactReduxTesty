import { useState } from 'react';
import ButtonCounter from "./components/Chapter09/ButtonCounter.jsx";
import './App.css';
import Shop from "./components/Chapter09/Shop.jsx";
import TodoApp from "./components/Chapter09/TodoApp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <ButtonCounter />
        <Shop />
        <TodoApp />
    </>
  )
}

export default App
