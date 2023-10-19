import { useState } from 'react';
import LearnJSX from "./components/LearnJSX";
import LearnAtribiutes from "./components/LearnAtribiutes";
import LearnNesting from "./components/LearnNesting";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <LearnJSX />
        <LearnAtribiutes />
        <LearnNesting />
    </>
  )
}

export default App
