import logo from './logo.svg';
import './App.css';
import Hello from "./components/Chapter05/Hello";
import CurrencyConverter from "./components/Chapter04/CurrencyConverter";
import LikeBox from "./components/Chapter04/LikeBox";
import Menu from "./components/Chapter04/Menu";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CurrencyConverter
            from="EUR"
            to="USD"
            value={200}
            rate={1.125}
        />
        <Hello name="Grzegorz" surname="Kowalski" />
        <LikeBox likes={550} />
        <Menu tab={menu} />
      </header>
    </div>
  );
}

export default App;
