import logo from './logo.svg';
import './App.css';
import Chapter01Task01 from "./components/Chapter01Task01";
import Chapter01Task04 from "./components/Chapter01Task04";
import Chapter02Task02 from "./components/Chapter02Task02";
import Chapter02Task04 from "./components/Chapter02Task04";
import Chapter03Task01 from "./components/Chapter03Task01";

function App() {
  const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Chapter01Task01 />*/}
        {/*<Chapter01Task04 />*/}
        {/*<Chapter02Task02 />*/}
        {/*<Chapter02Task04 />*/}
        <Chapter03Task01 />
      </header>
    </div>
  );
}

export default App;
