import './App.css'

function App() {
  const numberA = parseInt(prompt("Podaj liczbę A?"));
  const numberB = parseInt(prompt("Podaj liczbę B?"));
  const birthYear = parseInt(prompt("Podaj rok urodzenia?"));
  return (
    <>
      <div className="card">
          <p>{numberA + numberB}</p>
          <h1>{new Date().getFullYear() - birthYear} lat</h1>
      </div>
    </>
  )
}

export default App
