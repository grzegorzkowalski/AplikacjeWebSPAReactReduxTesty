import artist from "./data/artist.js";
import './App.css';

function App() {
  const numberA = parseInt(prompt("Podaj liczbę A?"));
  const numberB = parseInt(prompt("Podaj liczbę B?"));
  const birthYear = parseInt(prompt("Podaj rok urodzenia?"));
  return (
    <>
      <div className="card">
          <p>{numberA + numberB}</p>
          <h1>{new Date().getFullYear() - birthYear} lat</h1>
          <ul>
              <li>{artist.firstName}</li>
              <li>{artist.nickname}</li>
              <li>{artist.lastName}</li>
              <li>{artist.age}</li>
          </ul>
      </div>
    </>
  )
}

export default App
