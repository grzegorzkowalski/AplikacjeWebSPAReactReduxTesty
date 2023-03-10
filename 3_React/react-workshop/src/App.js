import './App.css';
import ShopItem from "./components/Chapter06/ShopItem";
import ShopList from "./components/Chapter06/ShopList";
import shopItems from "./data/shopItems";
import menu from "./data/menu";
import HelloWorld from "./components/Chapter07/HelloWorld";
import StrobeLight from "./components/Chapter07/StrobeLight";
import Clock from "./components/Chapter07/Clock";

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
        <Clock />
      </header>
    </div>
  );
}

export default App;
