import logo from './logo.svg';
import './App.css';
import Hello from "./components/Chapter05/Hello";
import CurrencyConverter from "./components/Chapter04/CurrencyConverter";
import LikeBox from "./components/Chapter04/LikeBox";
import Menu from "./components/Chapter04/Menu";
import ShopItem from "./components/Chapter06/ShopItem";

function App() {
  const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  const menu = [
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
  ];
  const shopData = {
        title: "MacBook Pro",
        image: "https://f01.esfr.pl/foto/7/96504077281/50aee3cf071426768c1f190855918eb4/apple-laptop-mba-m1-8gb-256ssd-gold-us,96504077281_8.jpg",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999
    };
  return (
    <div className="App">
      <header className="App-header">
        <ShopItem data={shopData} />
      </header>
    </div>
  );
}

export default App;
