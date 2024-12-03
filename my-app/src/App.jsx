import './App.css';

function App() {
  const color = prompt("Wybierz kolor (red, green, blue)?");
  const isOkColor = ["red", "green", "blue"].includes(color);

  const styles = {
    width: "100px",
    height: "100px",
    borderColor: color,
    borderStyle: "solid",
    borderWidth: "5px"
  }

  return (
    <>
      {
        isOkColor ? <div style={styles} /> : <div>Nieprawidłowy wybór koloru</div>
      }
    </>
  );
}

export default App;
