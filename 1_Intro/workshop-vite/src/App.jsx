import { useState } from 'react';
import ButtonCounter from "./components/Chapter09/ButtonCounter.jsx";
import './App.css';
import Shop from "./components/Chapter09/Shop.jsx";
import TodoApp from "./components/Chapter09/TodoApp.jsx";
import MyButton from "./components/Chapter10/MyButton.jsx";
import NumberInfo from "./components/Chapter10/NumberInfo.jsx";
import SelectOrType from "./components/Chapter11/SelectOrType.jsx";

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 5, 7, 10, 16];
  return (
    <>
        {/*<ButtonCounter />*/}
        {/*<Shop />*/}
        {/*<TodoApp />*/}
        {/*<MyButton />*/}

        {/*{*/}
        {/*    numbers.map((el, i) => <NumberInfo key={i} number={el} />)*/}
        {/*}*/}
        <SelectOrType carList={["BMW", "Jaguar", "Porsche"]} />
    </>
  )
}

export default App
