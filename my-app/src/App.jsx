import './App.css';
import people from "./data/people";
import Results from "./components/Results";
import Search from "./components/04_Chapter/Search";
//import Hello from "./components/05_Chapter/Hello";
import elements from "./data/elements";
import Menu from "./components/05_Chapter/Menu";
import LikeBox from "./components/05_Chapter/LikeBox";
import ShopItem from "./components/06_Chapter/ShopItem";
import item from "./data/shopItem.js";
import Box from "./components/07_Chapter/Box";
import Clock from "./components/07_Chapter/Clock";
import HelloWorld from "./components/07_Chapter/HelloWorld.jsx";
import Buttons from "./components/08_Chapter/Buttons.jsx";
import CountThings from "./components/08_Chapter/CountThings";
import EventsTest from "./components/08_Chapter/EventsTest";
import Shop from "./components/09_Chapter/Shop";
import NumberInfo from "./components/10_Chapter/NumberInfo.jsx";
import Hello from "./components/11_Chapter/Hello.jsx";
import Index from "./components/11_Chapter/SelectOrType/index.jsx";
import IpFinder from "./components/12_Chapter/IpFinder.jsx";

function App() {

  const createPeople = (el) => {
    return (
        <div className="person" key={el.id}>
          <img src={el.avatar} alt={`${el.name} ${el.surname}`} />
          <div className="info">
            <h1>{el.title} {el.name} {el.surname}</h1>
            <p>{el.bio}</p>
          </div>
        </div>
    )
  }

  const items = ["BMW", "Jaguar", "Porsche"];

  return (
    <>
      {/*<h1>Lista osób:</h1>*/}
      {/*{*/}
      {/*  people.map(el => createPeople(el))*/}
      {/*}*/}
      {/*<Results />*/}
      {/*<Search />*/}
      {/*<Hello name="Grzegorz" surname="Kowalski" />*/}
      {/*<Menu elements={elements} />*/}
      {/*<LikeBox likes={500} />*/}
      {/*<ShopItem item={item} />*/}
      {/*<Box />*/}
      {/*<Clock />*/}
      {/*<HelloWorld />*/}
      {/*<Buttons />*/}
      {/*<CountThings />*/}
      {/*<EventsTest />*/}
      {/*<Shop />*/}
      {/*{*/}
      {/*    [1, 2, 5, 7,10, 16].map((el, i) => <NumberInfo number={el} key={i} />)*/}
      {/*}*/}
      {/*<Hello />*/}
      <Index items={items} />
      <IpFinder />

    </>
  );
}

export default App;
