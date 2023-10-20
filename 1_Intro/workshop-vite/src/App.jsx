import React, {useContext, useState} from 'react';
import LearnJSX from "./components/LearnJSX";
import LearnAtribiutes from "./components/LearnAtribiutes";
import LearnNesting from "./components/LearnNesting";
import './App.css';
import Menu from "./components/Menu.jsx";
import Search from "./components/Search.jsx";
import LikeBox from "./components/LikeBox.jsx";
import ShopItem from "./components/ShopItem .jsx";
import ShopList from "./components/ShopList.jsx";
import HelloWorld from "./components/HelloWorld.jsx";
import StrobeLight from "./components/StrobeLight.jsx";
import Counter from "./components/Counter.jsx";
import Modal from "./components/Modal.jsx";
import CounterProvider from "./context/counterContext.jsx";
import Stoper from "./stoper/Stoper.jsx";

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
  const item = {
      title: "MacBook Pro",
      image: "https://f00.esfr.pl/foto/6/107612067049/acf30858ad6c4ad0abc24cc6c4ba71ff/apple-laptop-mbp-m2-8gb-256ssd-us-grey,107612067049_3.jpg",
      description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
      price: 9999
  };
  const devices = [
      {
          title: "Mysz komputerowa",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
      },
      {
          title: "Klawiatura",
          image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
      },
      {
          title: "Laptop programisty",
          image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
      }
  ];

  return (
    <CounterProvider>
        <HelloWorld />
        <Counter />
        <Modal heading="Zapisz się do newslettera!!!"/>
        <Stoper />
    </CounterProvider>
  )
}

export default App
