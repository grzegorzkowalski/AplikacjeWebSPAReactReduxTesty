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

  const basicStyles = {
    width: "100px",
    height: "100px",
  }

  const redDiv = <div style={{...basicStyles, backgroundColor: "red"}} />;
  const greenDiv = <div style={{...basicStyles, backgroundColor: "green"}} />;
  const blueDiv = <div style={{...basicStyles, backgroundColor: "blue"}} />;


  return (
    <>
      {
        isOkColor ? <div style={styles} /> : <div>Nieprawidłowy wybór koloru</div>
      }
      {redDiv}
      {greenDiv}
      {blueDiv}
    </>
  );
}

export default App;
