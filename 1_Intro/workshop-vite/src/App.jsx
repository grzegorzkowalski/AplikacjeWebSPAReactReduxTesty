import { useState } from 'react';
import LearnJSX from "./components/LearnJSX";
import LearnAtribiutes from "./components/LearnAtribiutes";
import LearnNesting from "./components/LearnNesting";
import './App.css';
import Menu from "./components/Menu.jsx";
import Search from "./components/Search.jsx";
import LikeBox from "./components/LikeBox.jsx";

function App() {
  const [count, setCount] = useState(0);

  const list = [
        {
            url: "/",
            text: "Strona główna"
        },
        {
            url: "/blog",
            text: "Blog"
        },
        {
            url: "/cennik",
            text: "Cennik"
        },
        {
            url: "/kontakt",
            text: "Kontakt"
        }
    ]
  return (
    <>
        {/*<LearnJSX />*/}
        {/*<LearnAtribiutes />*/}
        {/*<LearnNesting />*/}
        <Menu list={list} />
        <Search />
        <LikeBox />
    </>
  )
}

export default App
