import logo from './logo.svg';
import './App.css';
import Chapter01Task01 from "./components/Chapter01Task01";
import Chapter01Task04 from "./components/Chapter01Task04";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Chapter01Task01 />*/}
        <Chapter01Task04 />
      </header>
    </div>
  );
}

export default App;
