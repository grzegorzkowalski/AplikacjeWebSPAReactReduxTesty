import { useState } from 'react';
import ButtonCounter from "./components/Chapter09/ButtonCounter.jsx";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <ButtonCounter />
    </>
  )
}

export default App
