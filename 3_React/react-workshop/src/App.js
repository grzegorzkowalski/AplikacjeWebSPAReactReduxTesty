import './App.css';
import ShopItem from "./components/Chapter06/ShopItem";
import ShopList from "./components/Chapter06/ShopList";
import shopItems from "./data/shopItems";
import menu from "./data/menu";
import HelloWorld from "./components/Chapter07/HelloWorld";
import StrobeLight from "./components/Chapter07/StrobeLight";
import Clock from "./components/Chapter07/Clock";
import ShowUserFunc from "./components/Chapter08/ShowUserFunc";
import TextTyper from "./components/Chapter08/TextTyper";
import Counter from "./components/Chapter08/Counter";
import Shop from "./components/Chapter09/Shop";
import NumberInfo from "./components/Chapter10/NumberInfo";
import SecretStuff from "./components/Chapter10/SecretStuff";
import CarList from "./components/Chapter11/CarList";

function App() {
  const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  const shopData = {
        title: "MacBook Pro",
        image: "https://f01.esfr.pl/foto/7/96504077281/50aee3cf071426768c1f190855918eb4/apple-laptop-mba-m1-8gb-256ssd-gold-us,96504077281_8.jpg",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999
    };
  return (
    <div className="App">
      <header className="App-header">
        {/*<ShopItem data={shopData} />*/}
        {/*<ShopList shopItems={shopItems} />*/}
        {/*<HelloWorld />*/}
        {/*<StrobeLight color="yellow" frequency={500} />*/}
        {/*<StrobeLight color="pink" frequency={1500} />*/}
        {/*<StrobeLight color="magenta" frequency={1000} />*/}
        {/*<Clock />*/}
        {/*<ShowUserFunc />*/}
        {/*<ShowUserFunc name="Grzegorz" surname="Kowalski" />*/}
        {/*<TextTyper text="Witaj!" />*/}
        {/*<Counter />*/}
        {/*<Shop />*/}
        {/*<NumberInfo number={1} />*/}
        {/*<NumberInfo number={2} />*/}
        {/*<NumberInfo number={5} />*/}
        {/*<NumberInfo number={7} />*/}
        {/*<NumberInfo number={10} />*/}
        {/*<NumberInfo number={16} />*/}
        {/*<SecretStuff*/}
        {/*    password="Test1234"*/}
        {/*    correctPassword="Test12345"*/}
        {/*    secret="Lubię pizzę"*/}
        {/*/>*/}
        {/*  <SecretStuff*/}
        {/*      password="Test12345"*/}
        {/*      correctPassword="Test12345"*/}
        {/*      secret="Lubię uczyć"*/}
        {/*  />*/}
        <CarList />
      </header>
    </div>
  );
}

export default App;
